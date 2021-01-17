using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_BDS.Model;
using static WebAPI_BDS.Model.LocationType;

namespace WebAPI_BDS.Service
{
    public class LocationService : ILocationService
    {
        private readonly BdsDbContext _context;

        public LocationService(BdsDbContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<List<Location>>> GetCity()
        {
            ServiceResponse<List<Location>> locationResponse = new ServiceResponse<List<Location>>();
            locationResponse.Data = await _context.Location.Where(x => x.LocationType.Name == "City").OrderBy(x => x.Name).Take(80).ToListAsync();
            return locationResponse;
        }

        public async Task<ServiceResponse<List<Location>>> GetDistrict(string CityID)
        {
            ServiceResponse<List<Location>> locationResponse = new ServiceResponse<List<Location>>();
            locationResponse.Data = await _context.Location.Where(x => x.LocationType.Name == "District" && x.ParentID == Guid.Parse(CityID)).OrderBy(x => x.Name).ToListAsync();
            return locationResponse;
        }

        public async Task<ServiceResponse<List<Location>>> GetWard(string DistrictID)
        {
            ServiceResponse<List<Location>> locationResponse = new ServiceResponse<List<Location>>();
            locationResponse.Data = await _context.Location.Where(x => x.LocationType.Name == "Ward" && x.ParentID == Guid.Parse(DistrictID)).OrderBy(x => x.Name).ToListAsync();
            return locationResponse;
        }

        public async Task<ServiceResponse<Location>> GetLocationByID(string locationID)
        {
            ServiceResponse<Location> locationResponse = new ServiceResponse<Location>();
            locationResponse.Data = await _context.Location.Where(x => x.ID == Guid.Parse(locationID)).FirstOrDefaultAsync();
            return locationResponse;
        }

        public string GetLocationPath(string locationID)
        {
            Location location = _context.Location.Where(x => x.ID == Guid.Parse(locationID)).FirstOrDefault();
            if (location != null)
                return location.FullPath;
            return "";
        }
    }
}
