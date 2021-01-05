using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using WebPWA.Shared;

namespace WebPWA.Client.ViewModel
{
    public class PropertyViewModel
    {
        public Guid ID { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "Vui lòng nhập tiêu đề tin đăng của bạn. Tối thiểu là 30 ký tự và tối đa là 99 ký tự.", MinimumLength = 30)]
        public string Title { get; set; }
        public float Width { get; set; }
        public float Length { get; set; }
        public float Area { get; set; }
        public int NoOfStorey { get; set; }
        public int NoOfRooms { get; set; }
        public int NoOfToilets { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }
        public bool IsNegotiable { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        [StringLength(3000, ErrorMessage = "Vui lòng nhập nội dung tin đăng của bạn. Tối thiểu là 30 ký tự và tối đa là 3000 ký tự.", MinimumLength = 30)]
        public string Content { get; set; }
        public string Image { get; set; }
        [Required]
        public Guid? PropertyTypeID { get; set; }
        public Code PropertyType { get; set; }
        public Guid? OrientationID { get; set; }
        public bool HasTitle { get; set; }
        [Required]
        public Guid LocationID { get; set; }
        public Location Location { get; set; }
        public Guid AdsID { get; set; }
        public Code Ads { get; set; } // loại tin
        public int Status { get; set; }
        public DateTime ValidityDateFrom { get; set; }
        public DateTime ValidityDateTo { get; set; }
        public Guid CreatedUserID { get; set; }
        public User CreatedUser { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime LastModifiedDateTime { get; set; }
        public DateTime SuccessedDateTime { get; set; }

        private HttpClient httpClient;

        public PropertyViewModel()
        {

        }

        public PropertyViewModel(HttpClient http)
        {
            httpClient = http;
        }

        public async Task<List<Property>> GetAllProperty()
        {
            ServiceResponse<List<Property>> PropertyResponse = new ServiceResponse<List<Property>>();
            PropertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<Property>>>("http://localhost:70/WebAPI/Property/GetAllProperty");
            if (PropertyResponse != null)
                return PropertyResponse.Data;
            return null;
        }

        public async Task GetPropertyByID(Guid id)
        {
            ServiceResponse<Property> PropertyResponse = new ServiceResponse<Property>();
            Property u = new Property();
            PropertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<Property>>("http://localhost:70/WebAPI/Property/GetPropertyByID/" + id.ToString());
            if (PropertyResponse != null)
                u = PropertyResponse.Data;
            LoadCurrentObject(u);
        }

        public async Task UpdateProperty(Guid id)
        {
            Property Property = this;
            await httpClient.PutAsJsonAsync("http://localhost:70/WebAPI/Property/UpdateProperty/" + id.ToString(), Property);
        }

        public async Task DeleteProperty(Guid id)
        {
            await httpClient.DeleteAsync("http://localhost:70/WebAPI/Property/DeleteProperty/" + id.ToString());
        }


        public async Task CreateProperty()
        {
            Property Property = this;
            
            await httpClient.PostAsJsonAsync("http://localhost:70/WebAPI/Property/CreateProperty/", Property);
        }

        public async Task<string> UploadProductImage(MultipartFormDataContent content)
        {
            var postResult = await httpClient.PostAsync("http://localhost:70/WebAPI/Property/Upload", content);
            var postContent = await postResult.Content.ReadAsStringAsync();
            if (!postResult.IsSuccessStatusCode)
            {
                throw new ApplicationException(postContent);
            }
            else
            {
                var imgUrl = Path.Combine("http://localhost:70/", postContent);
                return imgUrl;
            }
        }

        private void LoadCurrentObject(PropertyViewModel PropertyViewModel)
        {
            Title = PropertyViewModel.Title;
            Content = PropertyViewModel.Content;
            Address = PropertyViewModel.Address;
        }

        public async Task<List<Code>> GetPropertyType()
        {
            ServiceResponse<List<Code>> lstPropertyType = new ServiceResponse<List<Code>>();
            lstPropertyType = await httpClient.GetFromJsonAsync<ServiceResponse<List<Code>>>("http://localhost:70/WebAPI/Property/GetPropertyType");
            if (lstPropertyType != null && lstPropertyType.Data != null)
                return lstPropertyType.Data;
            return null;
        }

        public async Task<List<Code>> GetOrientation()
        {
            ServiceResponse<List<Code>> lstOrientation = new ServiceResponse<List<Code>>();
            lstOrientation = await httpClient.GetFromJsonAsync<ServiceResponse<List<Code>>>("http://localhost:70/WebAPI/Property/GetOrientation");
            if (lstOrientation != null && lstOrientation.Data != null)
                return lstOrientation.Data;
            return null;
        }

        public async Task<List<Code>> GetNewType()
        {
            ServiceResponse<List<Code>> lstAds = new ServiceResponse<List<Code>>();
            lstAds = await httpClient.GetFromJsonAsync<ServiceResponse<List<Code>>>("http://localhost:70/WebAPI/Property/GetNewType");
            if (lstAds != null && lstAds.Data != null)
                return lstAds.Data;
            return null;
        }

        public async Task<List<Location>> GetCity()
        {
            ServiceResponse<List<Location>> lstCity = new ServiceResponse<List<Location>>();
            lstCity = await httpClient.GetFromJsonAsync<ServiceResponse<List<Location>>>("http://localhost:70/WebAPI/Location/GetCity");
            if (lstCity != null && lstCity.Data != null)
                return lstCity.Data;
            return null;
        }

        public async Task<List<Location>> GetDistrict(Guid id)
        {
            ServiceResponse<List<Location>> lstDistrict = new ServiceResponse<List<Location>>();
            lstDistrict = await httpClient.GetFromJsonAsync<ServiceResponse<List<Location>>>("http://localhost:70/WebAPI/Location/GetDistrict/" + id.ToString());
            if (lstDistrict != null && lstDistrict.Data != null)
                return lstDistrict.Data;
            return null;
        }

        public async Task<List<Location>> GetWard(Guid id)
        {
            ServiceResponse<List<Location>> lstWard = new ServiceResponse<List<Location>>();
            lstWard = await httpClient.GetFromJsonAsync<ServiceResponse<List<Location>>>("http://localhost:70/WebAPI/Location/GetWard/" + id.ToString());
            if (lstWard != null && lstWard.Data != null)
                return lstWard.Data;
            return null;
        }

        public async Task<List<Property>> GetPropertyByUserID(Guid id)
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> properties = new List<Property>();
            propertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<Property>>>("http://localhost:70/WebAPI/Property/GetPropertyByUserID/" + id.ToString());
            if (propertyResponse != null)
                return propertyResponse.Data;
            return null;
        }

        public static implicit operator PropertyViewModel(Property Property)
        {
            return new PropertyViewModel
            {
                Title = Property.Title,
                Content = Property.Content,
                Address = Property.Address
            };
        }

        public static implicit operator Property(PropertyViewModel PropertyViewModel)
        {
            return new Property
            {
                Title = PropertyViewModel.Title,
                Content = PropertyViewModel.Content,
                Address = PropertyViewModel.Address,
                AdsID = PropertyViewModel.AdsID,
                Area = PropertyViewModel.Area,
                CreatedUserID = PropertyViewModel.CreatedUserID,
                Image = PropertyViewModel.Image,
                LocationID = PropertyViewModel.LocationID,
                Length = PropertyViewModel.Length,
                Width = PropertyViewModel.Width,
                NoOfRooms = PropertyViewModel.NoOfRooms,
                NoOfStorey = PropertyViewModel.NoOfStorey,
                NoOfToilets = PropertyViewModel.NoOfToilets,
                PriceFrom = PropertyViewModel.PriceFrom,
                PriceTo = PropertyViewModel.PriceTo,
                PropertyTypeID = PropertyViewModel.PropertyTypeID,
                Status = PropertyViewModel.Status,
                ValidityDateFrom = PropertyViewModel.ValidityDateFrom,
                ValidityDateTo = PropertyViewModel.ValidityDateTo,
                OrientationID = PropertyViewModel.OrientationID
            };
        }
    }
}
