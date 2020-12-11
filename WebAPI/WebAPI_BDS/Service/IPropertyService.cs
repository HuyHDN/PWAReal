using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_BDS.Model;

namespace WebAPI_BDS.Service
{
    public interface IPropertyService
    {
        Task<ServiceResponse<List<Property>>> GetAllProperty();
        Task<ServiceResponse<Property>> GetPropertyByID(Guid propertyID);
        Task<ServiceResponse<List<Property>>> CreateNewProperty(Property newProperty);
        Task<ServiceResponse<Property>> UpdateProperty(Guid propertyID, Property property);
        Task<ServiceResponse<List<Property>>> DeleteProperty(Guid propertyID);
    }
}
