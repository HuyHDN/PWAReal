﻿using System;
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
        Task<ServiceResponse<List<Property>>> GetPropertyByUserID(Guid userID);
        Task<ServiceResponse<List<Property>>> GetPendingProperty();
        Task<ServiceResponse<List<Property>>> GetVerifiedProperty();
        Task<ServiceResponse<List<Property>>> GetPropertyByType(string type);
        Task<ServiceResponse<List<Property>>> GetSearchProperty(string title, Guid locationID, Guid cateID, Guid oriID, int price, int area, int room);
        Task<ServiceResponse<List<Property>>> CreateNewProperty(Property newProperty);
        Task<ServiceResponse<Property>> UpdateProperty(Guid propertyID, Property property);
        Task<ServiceResponse<List<Property>>> DeleteProperty(Guid propertyID);
        Task<ServiceResponse<List<Code>>> GetPropertyType();
        Task<ServiceResponse<List<Code>>> GetOrientation();
        Task<ServiceResponse<List<Code>>> GetNewType();
        Task<ServiceResponse<Property>> UpdatePropertyView(Guid id);
    }
}
