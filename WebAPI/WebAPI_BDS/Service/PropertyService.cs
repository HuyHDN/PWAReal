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
    }
}
