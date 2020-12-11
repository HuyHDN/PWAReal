using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        public string Title { get; set; }
        public string Image { get; set; }
        public string Content { get; set; }
        public DateTime ValidityDateFrom { get; set; }
        public DateTime ValidityDateTo { get; set; }
        public float Width { get; set; }
        public float Length { get; set; }
        public int NoOfStorey { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }
        public Guid? PropertyTypeID { get; set; }
        public Code PropertyType { get; set; }
        public float Area { get; set; }
        public int NoOfRooms { get; set; }
        public int NoOfToilets { get; set; }
        public bool IsNegotiable { get; set; }
        public Orientation Orientation { get; set; }
        public bool HasTitle { get; set; }
        public string Address { get; set; }
        public Guid LocationID { get; set; }
        public Location Location { get; set; }
        public Guid AdsID { get; set; }
        public Code Ads { get; set; }
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

        private void LoadCurrentObject(PropertyViewModel PropertyViewModel)
        {
            Title = PropertyViewModel.Title;
            Content = PropertyViewModel.Content;
            Address = PropertyViewModel.Address;
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
            Address = PropertyViewModel.Address
        };
    }
}
}
