using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_BDS.Model;

namespace WebAPI_BDS.Service
{
    public class PropertyService : IPropertyService
    {
        private readonly BdsDbContext _context;

        public PropertyService(BdsDbContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<List<Property>>> CreateNewProperty(Property newProperty)
        {
            newProperty.ID = System.Guid.NewGuid();
            newProperty.CreatedDateTime = newProperty.LastModifiedDateTime = newProperty.SuccessedDateTime = DateTime.Now;
            newProperty.AdsID = Guid.Parse("6c7b943a-4d3d-495c-89e5-2535bafe3eed");
            newProperty.Status = (int)Status.CHỜ_DUYỆT;
            _context.Property.Add(newProperty);
            await _context.SaveChangesAsync();
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            propertyResponse.Data = await _context.Property.ToListAsync();
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Property>>> DeleteProperty(Guid propertyID)
        {
            Property propertyToDelete = await _context.Property.Where(x => x.ID == propertyID).FirstOrDefaultAsync();
            _context.Remove(propertyToDelete);
            await _context.SaveChangesAsync();
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>
            {
                Data = await _context.Property.ToListAsync()
            };
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Property>>> GetAllProperty()
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            propertyResponse.Data = await _context.Property.ToListAsync();
            return propertyResponse;
        }

        public async Task<ServiceResponse<Property>> GetPropertyByID(Guid propertyID)
        {
            ServiceResponse<Property> propertyResponse = new ServiceResponse<Property>();
            propertyResponse.Data = await _context.Property.Where(x => x.ID == propertyID).FirstOrDefaultAsync();
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Code>>> GetPropertyType()
        {
            ServiceResponse<List<Code>> propertyResponse = new ServiceResponse<List<Code>>();
            propertyResponse.Data = await _context.Code.Where(x => x.CodeType.Name == "PropertyTypeGroup").ToListAsync();
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Code>>> GetOrientation()
        {
            ServiceResponse<List<Code>> propertyResponse = new ServiceResponse<List<Code>>();
            propertyResponse.Data = await _context.Code.Where(x => x.CodeType.Name == "Orientation").ToListAsync();
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Code>>> GetNewType()
        {
            ServiceResponse<List<Code>> propertyResponse = new ServiceResponse<List<Code>>();
            propertyResponse.Data = await _context.Code.Where(x => x.CodeType.Name == "AdsType").ToListAsync();
            return propertyResponse;
        }

        public async Task<ServiceResponse<Property>> UpdateProperty(Guid propertyID, Property property)
        {
            Property propertyToUpdate = await _context.Property.Where(x => x.ID == propertyID).FirstOrDefaultAsync();
            propertyToUpdate.Content = property.Content;
            propertyToUpdate.Title = property.Title;
            propertyToUpdate.Address = property.Address;
            await _context.SaveChangesAsync();
            ServiceResponse<Property> propertyResponse = new ServiceResponse<Property>
            {
                Data = propertyToUpdate
            };
            return propertyResponse;
        }

        public Task<ServiceResponse<string>> UploadImage()
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse<List<Property>>> GetPropertyByUserID(Guid userID)
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            propertyResponse.Data = await _context.Property.Where(x => x.CreatedUserID == userID).ToListAsync();
            return propertyResponse;
        }
    }
}
