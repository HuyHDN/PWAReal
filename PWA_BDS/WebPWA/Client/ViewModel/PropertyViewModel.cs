using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using WebRealEste.Shared;

namespace WebRealEste.Client.ViewModel
{
    public class PropertyViewModel
    {
        public Guid ID { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "Vui lòng nhập tiêu đề tin đăng của bạn. Tối thiểu là 30 ký tự và tối đa là 99 ký tự.", MinimumLength = 30)]
        public string Title { get; set; }
        public float? Width { get; set; }
        public float? Length { get; set; }
        public float? Area { get; set; }
        public int? NoOfStorey { get; set; }
        public int? NoOfRooms { get; set; }
        public int? NoOfToilets { get; set; }
        public decimal? PriceFrom { get; set; }
        public decimal? PriceTo { get; set; }
        public bool IsNegotiable { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        [StringLength(3000, ErrorMessage = "Vui lòng nhập nội dung tin đăng của bạn. Tối thiểu là 30 ký tự và tối đa là 3000 ký tự.", MinimumLength = 30)]
        public string Content { get; set; }
        public string Image { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }
        [Required]
        public Guid? PropertyTypeID { get; set; }
        public Code PropertyType { get; set; }
        public Guid? OrientationID { get; set; }
        public bool HasTitle { get; set; }
        [Required(ErrorMessage = "Vui lòng chọn địa chỉ đầy đủ.")]
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
        public int ViewCount { get; set; }

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
            PropertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<Property>>>(Config.Config.ApiUrl + "/Property/GetAllProperty");
            if (PropertyResponse != null)
                return PropertyResponse.Data;
            return null;
        }

        public async Task GetPropertyByID(Guid id)
        {
            ServiceResponse<Property> PropertyResponse = new ServiceResponse<Property>();
            Property u = new Property();
            PropertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<Property>>(Config.Config.ApiUrl + "/Property/GetPropertyByID/" + id.ToString());
            if (PropertyResponse != null)
                u = PropertyResponse.Data;
            LoadCurrentObject(u);
        }

        public async Task UpdateProperty(Guid id)
        {
            Property Property = this;
            await httpClient.PutAsJsonAsync(Config.Config.ApiUrl + "/Property/UpdateProperty/" + id.ToString(), Property);
        }

        public async Task DeleteProperty(Guid id)
        {
            await httpClient.DeleteAsync(Config.Config.ApiUrl + "/Property/DeleteProperty/" + id.ToString());
        }


        public async Task CreateProperty()
        {
            Property Property = this;

            await httpClient.PostAsJsonAsync(Config.Config.ApiUrl + "/Property/CreateProperty/", Property);
        }

        public async Task<string> UploadProductImage(MultipartFormDataContent content)
        {
            var postResult = await httpClient.PostAsync(Config.Config.ApiUrl + "/Property/Upload", content);
            var postContent = await postResult.Content.ReadAsStringAsync();
            if (!postResult.IsSuccessStatusCode)
            {
                throw new ApplicationException(postContent);
            }
            else
            {
                var imgUrl = Path.Combine(Config.Config.ApiUrl + "/", postContent);
                return imgUrl;
            }
        }

        private void LoadCurrentObject(PropertyViewModel PropertyViewModel)
        {
            Title = PropertyViewModel.Title;
            Content = PropertyViewModel.Content;
            Address = PropertyViewModel.Address;
            AdsID = PropertyViewModel.AdsID;
            Area = PropertyViewModel.Area;
            CreatedUserID = PropertyViewModel.CreatedUserID;
            CreatedUser = PropertyViewModel.CreatedUser;
            Image = PropertyViewModel.Image;
            Image2 = PropertyViewModel.Image2;
            Image3 = PropertyViewModel.Image3;
            LocationID = PropertyViewModel.LocationID;
            Location = PropertyViewModel.Location;
            Length = PropertyViewModel.Length;
            Width = PropertyViewModel.Width;
            NoOfRooms = PropertyViewModel.NoOfRooms;
            NoOfStorey = PropertyViewModel.NoOfStorey;
            NoOfToilets = PropertyViewModel.NoOfToilets;
            PriceFrom = PropertyViewModel.PriceFrom;
            PriceTo = PropertyViewModel.PriceTo;
            PropertyTypeID = PropertyViewModel.PropertyTypeID;
            PropertyType = PropertyViewModel.PropertyType;
            Status = PropertyViewModel.Status;
            ValidityDateFrom = PropertyViewModel.ValidityDateFrom;
            ValidityDateTo = PropertyViewModel.ValidityDateTo;
            OrientationID = PropertyViewModel.OrientationID;
            CreatedDateTime = PropertyViewModel.CreatedDateTime;
            ViewCount = PropertyViewModel.ViewCount;
        }

        public async Task<List<Code>> GetPropertyType()
        {
            ServiceResponse<List<Code>> lstPropertyType = new ServiceResponse<List<Code>>();
            lstPropertyType = await httpClient.GetFromJsonAsync<ServiceResponse<List<Code>>>(Config.Config.ApiUrl + "/Property/GetPropertyType");
            if (lstPropertyType != null && lstPropertyType.Data != null)
                return lstPropertyType.Data;
            return null;
        }

        public async Task<List<Code>> GetOrientation()
        {
            ServiceResponse<List<Code>> lstOrientation = new ServiceResponse<List<Code>>();
            lstOrientation = await httpClient.GetFromJsonAsync<ServiceResponse<List<Code>>>(Config.Config.ApiUrl + "/Property/GetOrientation");
            if (lstOrientation != null && lstOrientation.Data != null)
                return lstOrientation.Data;
            return null;
        }

        public async Task<List<Code>> GetNewType()
        {
            ServiceResponse<List<Code>> lstAds = new ServiceResponse<List<Code>>();
            lstAds = await httpClient.GetFromJsonAsync<ServiceResponse<List<Code>>>(Config.Config.ApiUrl + "/Property/GetNewType");
            if (lstAds != null && lstAds.Data != null)
                return lstAds.Data;
            return null;
        }

        public async Task<List<Location>> GetCity()
        {
            ServiceResponse<List<Location>> lstCity = new ServiceResponse<List<Location>>();
            lstCity = await httpClient.GetFromJsonAsync<ServiceResponse<List<Location>>>(Config.Config.ApiUrl + "/Location/GetCity");
            if (lstCity != null && lstCity.Data != null)
                return lstCity.Data;
            return null;
        }

        public async Task<List<Location>> GetDistrict(Guid id)
        {
            ServiceResponse<List<Location>> lstDistrict = new ServiceResponse<List<Location>>();
            lstDistrict = await httpClient.GetFromJsonAsync<ServiceResponse<List<Location>>>(Config.Config.ApiUrl + "/Location/GetDistrict/" + id.ToString());
            if (lstDistrict != null && lstDistrict.Data != null)
                return lstDistrict.Data;
            return null;
        }

        public async Task<List<Location>> GetWard(Guid id)
        {
            ServiceResponse<List<Location>> lstWard = new ServiceResponse<List<Location>>();
            lstWard = await httpClient.GetFromJsonAsync<ServiceResponse<List<Location>>>(Config.Config.ApiUrl + "/Location/GetWard/" + id.ToString());
            if (lstWard != null && lstWard.Data != null)
                return lstWard.Data;
            return null;
        }

        public async Task<List<Property>> GetPropertyByUserID(Guid id)
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> properties = new List<Property>();
            propertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<Property>>>(Config.Config.ApiUrl + "/Property/GetPropertyByUserID/" + id.ToString());
            if (propertyResponse != null)
                return propertyResponse.Data;
            return null;
        }

        public async Task<List<Property>> GetPendingProperty()
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> properties = new List<Property>();
            propertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<Property>>>(Config.Config.ApiUrl + "/Property/GetPendingProperty");
            if (propertyResponse != null)
                return propertyResponse.Data;
            return null;
        }

        public async Task<List<Property>> GetVerifiedProperty()
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> properties = new List<Property>();
            propertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<Property>>>(Config.Config.ApiUrl + "/Property/GetVerifiedProperty");
            if (propertyResponse != null)
                return propertyResponse.Data;
            return null;
        }

        public async Task<List<Property>> GetPropertyByType(string type)
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> properties = new List<Property>();
            propertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<Property>>>(Config.Config.ApiUrl + "/Property/GetPropertyByType/" + type);
            if (propertyResponse != null)
                return propertyResponse.Data;
            return null;
        }

        public async Task<Location> GetLocationByID(Guid id)
        {
            ServiceResponse<Location> locationResponse = new ServiceResponse<Location>();
            Location location = new Location();
            locationResponse = await httpClient.GetFromJsonAsync<ServiceResponse<Location>>(Config.Config.ApiUrl + "/Location/GetLocationByID/" + id.ToString());
            if (locationResponse != null)
                return locationResponse.Data;
            return null;
        }

        public async Task<List<Property>> GetSearchProperty(string searchString)
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> properties = new List<Property>();
            propertyResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<Property>>>(Config.Config.ApiUrl + "/Property/GetSearchProperty/" + searchString);
            if (propertyResponse != null)
                return propertyResponse.Data;
            return null;
        }

        public async Task UpdatePropertyView(Guid id)
        {
            await httpClient.PutAsJsonAsync(Config.Config.ApiUrl + "/Property/UpdatePropertyView/" + id.ToString(), true);
        }

        public static implicit operator PropertyViewModel(Property property)
        {
            return new PropertyViewModel
            {
                Title = property.Title,
                Content = property.Content,
                Address = property.Address,
                AdsID = property.AdsID,
                Area = property.Area,
                CreatedUserID = property.CreatedUserID,
                CreatedUser = property.CreatedUser,
                Image = property.Image,
                Image2 = property.Image2,
                Image3 = property.Image3,
                LocationID = property.LocationID,
                Location = property.Location,
                Length = property.Length,
                Width = property.Width,
                NoOfRooms = property.NoOfRooms,
                NoOfStorey = property.NoOfStorey,
                NoOfToilets = property.NoOfToilets,
                PriceFrom = property.PriceFrom,
                PriceTo = property.PriceTo,
                PropertyTypeID = property.PropertyTypeID,
                PropertyType = property.PropertyType,
                Status = property.Status,
                ValidityDateFrom = property.ValidityDateFrom,
                ValidityDateTo = property.ValidityDateTo,
                OrientationID = property.OrientationID,
                CreatedDateTime = property.CreatedDateTime,
                ViewCount = property.ViewCount
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
                CreatedUser = PropertyViewModel.CreatedUser,
                Image = PropertyViewModel.Image,
                Image2 = PropertyViewModel.Image2,
                Image3 = PropertyViewModel.Image3,
                LocationID = PropertyViewModel.LocationID,
                Location = PropertyViewModel.Location,
                Length = PropertyViewModel.Length,
                Width = PropertyViewModel.Width,
                NoOfRooms = PropertyViewModel.NoOfRooms,
                NoOfStorey = PropertyViewModel.NoOfStorey,
                NoOfToilets = PropertyViewModel.NoOfToilets,
                PriceFrom = PropertyViewModel.PriceFrom,
                PriceTo = PropertyViewModel.PriceTo,
                PropertyTypeID = PropertyViewModel.PropertyTypeID,
                PropertyType = PropertyViewModel.PropertyType,
                Status = PropertyViewModel.Status,
                ValidityDateFrom = PropertyViewModel.ValidityDateFrom,
                ValidityDateTo = PropertyViewModel.ValidityDateTo,
                OrientationID = PropertyViewModel.OrientationID,
                CreatedDateTime = PropertyViewModel.CreatedDateTime,
                ViewCount = PropertyViewModel.ViewCount
            };
        }

        public string PriceToString(decimal price)
        {
            if (price >= 1E6M)
            {
                price = price / 1E6M;
                if (price >= 1000)
                {
                    price = price / 1000;
                    return price.ToString("0.00") + " tỷ";
                }
                return price.ToString("0.00") + " triệu";
            }
            return "";
        }
    }
}
