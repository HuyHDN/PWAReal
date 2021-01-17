using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_BDS.Model;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

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

        public async Task<ServiceResponse<List<Property>>> GetVerifiedProperty()
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> lstProperty = await _context.Property.Where(x => x.Status == 1).Take(18).ToListAsync();
            if (lstProperty != null && lstProperty.Count > 0)
            {
                List<Location> lstLocation = new List<Location>();
                List<User> lstUser = new List<User>();
                foreach (Property p in lstProperty)
                {
                    lstLocation.Add(_context.Location.Where(x => x.ID == p.LocationID).FirstOrDefault());
                    lstUser.Add(_context.Users.Where(x => x.ID == p.CreatedUserID).FirstOrDefault());
                }
                propertyResponse.Data = lstProperty;
            }
            else propertyResponse.Data = null;
            return propertyResponse;
        }

        public async Task<ServiceResponse<Property>> GetPropertyByID(Guid propertyID)
        {
            ServiceResponse<Property> propertyResponse = new ServiceResponse<Property>();
            Property property = await _context.Property.Where(x => x.ID == propertyID).FirstOrDefaultAsync();
            if (property != null)
            {
                Location l = await _context.Location.Where(x => x.ID == property.LocationID).FirstOrDefaultAsync();
                Code type = await _context.Code.Where(x => x.ID == property.PropertyTypeID).FirstOrDefaultAsync();
                User u = await _context.Users.Where(x => x.ID == property.CreatedUserID).FirstOrDefaultAsync();
                propertyResponse.Data = property;
            }
            else propertyResponse.Data = null;
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Code>>> GetPropertyType()
        {
            ServiceResponse<List<Code>> propertyResponse = new ServiceResponse<List<Code>>();
            propertyResponse.Data = await _context.Code.Where(x => x.CodeType.Name == "PropertyType").ToListAsync();
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
            propertyToUpdate.Title = property.Title;
            propertyToUpdate.Content = property.Content;
            propertyToUpdate.Address = property.Address;
            propertyToUpdate.AdsID = property.AdsID;
            propertyToUpdate.Area = property.Area;
            propertyToUpdate.CreatedUserID = property.CreatedUserID;
            propertyToUpdate.Image = property.Image;
            propertyToUpdate.Image2 = property.Image2;
            propertyToUpdate.Image3 = property.Image3;
            propertyToUpdate.LocationID = property.LocationID;
            propertyToUpdate.Length = property.Length;
            propertyToUpdate.Width = property.Width;
            propertyToUpdate.NoOfRooms = property.NoOfRooms;
            propertyToUpdate.NoOfStorey = property.NoOfStorey;
            propertyToUpdate.NoOfToilets = property.NoOfToilets;
            propertyToUpdate.PriceFrom = property.PriceFrom;
            propertyToUpdate.PriceTo = property.PriceTo;
            propertyToUpdate.PropertyTypeID = property.PropertyTypeID;
            propertyToUpdate.Status = property.Status;
            propertyToUpdate.ValidityDateFrom = property.ValidityDateFrom;
            propertyToUpdate.ValidityDateTo = property.ValidityDateTo;
            propertyToUpdate.OrientationID = property.OrientationID;
            await _context.SaveChangesAsync();
            ServiceResponse<Property> propertyResponse = new ServiceResponse<Property>
            {
                Data = propertyToUpdate
            };
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Property>>> GetPropertyByUserID(Guid userID)
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> lstProperty = await _context.Property.Where(x => x.CreatedUserID == userID).Take(76).ToListAsync();
            if (lstProperty != null && lstProperty.Count > 0)
            {
                List<Location> lstLocation = new List<Location>();
                foreach (Property p in lstProperty)
                {
                    Location l = await _context.Location.Where(x => x.ID == p.LocationID).FirstOrDefaultAsync();
                    if (l != null)
                        lstLocation.Add(l);
                }
                propertyResponse.Data = lstProperty;
            }
            else propertyResponse.Data = null;
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Property>>> GetPendingProperty()
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            propertyResponse.Data = await _context.Property.Where(x => x.Status == 0).OrderByDescending(x => x.CreatedDateTime).Take(20).ToListAsync();
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Property>>> GetPropertyByType(string type)
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            List<Property> lstProperty = new List<Property>();
            if (type == "New")
            {
                lstProperty = await _context.Property.Where(x => x.Status == 1).OrderByDescending(x => x.CreatedDateTime).Take(6).ToListAsync();
            }
            else
            {
                lstProperty = await _context.Property.Where(x => x.Ads.Name == type & x.Status == 1).OrderByDescending(x => x.CreatedDateTime).Take(4).ToListAsync();
            }
            if (lstProperty != null && lstProperty.Count > 0)
            {
                propertyResponse.Data = lstProperty;
                Location location = new Location();
                User user = new User();
                foreach (Property p in lstProperty)
                {
                    location = await _context.Location.Where(x => x.ID == p.LocationID).FirstOrDefaultAsync();
                    user = await _context.Users.Where(x => x.ID == p.CreatedUserID).FirstOrDefaultAsync();
                }
            }
            else propertyResponse.Data = null;
            return propertyResponse;
        }

        public async Task<ServiceResponse<List<Property>>> GetSearchProperty(string title, Guid locationID, Guid cateID, Guid oriID, int price, int area, int room)
        {
            ServiceResponse<List<Property>> propertyResponse = new ServiceResponse<List<Property>>();
            Location location = _context.Location.Where(x => x.ID == locationID).FirstOrDefault();
            decimal priceFrom = 0, priceTo = decimal.MaxValue;
            float areaFrom = 0, areaTo = float.MaxValue;
            if (price != -1)
            {
                switch (price)
                {
                    case 0:
                        priceFrom = 0;
                        priceTo = 500E6M;
                        break;
                    case 1:
                        priceFrom = 500E6M;
                        priceTo = 1E9M;
                        break;
                    case 2:
                        priceFrom = 1E9M;
                        priceTo = 2E9M;
                        break;
                    case 3:
                        priceFrom = 2E9M;
                        priceTo = 3E9M;
                        break;
                    case 4:
                        priceFrom = 3E9M;
                        priceTo = 5E9M;
                        break;
                    case 5:
                        priceFrom = 5E9M;
                        priceTo = 10E9M;
                        break;
                    case 6:
                        priceFrom = 10E9M;
                        break;
                }
            }
            if (area != -1)
            {
                switch (area)
                {
                    case 0:
                        areaTo = 30;
                        break;
                    case 1:
                        areaFrom = 30;
                        areaTo = 50;
                        break;
                    case 2:
                        areaFrom = 50;
                        areaTo = 80;
                        break;
                    case 3:
                        areaFrom = 80;
                        areaTo = 100;
                        break;
                    case 4:
                        areaFrom = 100;
                        areaTo = 150;
                        break;
                    case 5:
                        areaFrom = 150;
                        areaTo = 200;
                        break;
                    case 6:
                        areaFrom = 200;
                        break;
                }
            }
            propertyResponse.Data = await _context.Property.Where(x => x.Status == 1 &
                                                                  (title != "notitle" ? x.Title.Contains(title) : true) &
                                                                  (location != null ? x.Location.FullPath.Contains(location.Name) : true) &
                                                                  (cateID != Guid.Empty ? x.PropertyTypeID == cateID : true) &
                                                                  (oriID != Guid.Empty ? x.OrientationID == oriID : true) &
                                                                  (price != -1 ? x.PriceFrom >= priceFrom & x.PriceTo <= priceTo : true) &
                                                                  (area != -1 ? x.Area >= areaFrom & x.Area <= areaTo : true) &
                                                                  (room != -1 ? x.NoOfRooms >= room : true)
                                                                  ).Take(20).ToListAsync();
            return propertyResponse;
        }

        public async Task<ServiceResponse<Property>> UpdatePropertyView(Guid id)
        {
            ServiceResponse<Property> propertyResponse = new ServiceResponse<Property>();
            Property p = await _context.Property.Where(x => x.ID == id).FirstOrDefaultAsync();
            if (p != null)
            {
                p.ViewCount++;
                propertyResponse.Data = p;
            }
            else propertyResponse.Data = null;
            await _context.SaveChangesAsync();
            return propertyResponse;
        }
    }
}
