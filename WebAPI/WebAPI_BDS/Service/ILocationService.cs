using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_BDS.Model;

namespace WebAPI_BDS.Service
{
    public interface ILocationService
    {
        Task<ServiceResponse<List<Location>>> GetCity();
        Task<ServiceResponse<List<Location>>> GetDistrict(string CityID);
        Task<ServiceResponse<List<Location>>> GetWard(string DistrictID);
        Task<ServiceResponse<Location>> GetLocationByID(string locationID);
        string GetLocationPath(string locationID);
    }
}
