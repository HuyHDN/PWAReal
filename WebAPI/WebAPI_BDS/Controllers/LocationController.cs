using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_BDS.Model;
using WebAPI_BDS.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI_BDS.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private static ILocationService _locationService;
        private static BdsDbContext _context;
        public LocationController(ILocationService userService, BdsDbContext context)
        {
            _locationService = userService;
            _context = context;
        }
        
        [HttpGet("GetCity")]
        public async Task<IActionResult> GetCity()
        {
            return Ok(await _locationService.GetCity());
        }

        [HttpGet("GetLocationByID/{id}")]
        public async Task<IActionResult> GetLocationByID(string id)
        {
            return Ok(await _locationService.GetLocationByID(id));
        }

        [HttpGet("GetLocationPathByID/{id}")]
        public IActionResult GetLocationPathByID(string id)
        {
            return Ok(_locationService.GetLocationPath(id));
        }

        [HttpGet("GetDistrict/{id}")]
        public async Task<IActionResult> GetDistrict(string id)
        {
            return Ok(await _locationService.GetDistrict(id));
        }

        [HttpGet("GetWard/{id}")]
        public async Task<IActionResult> GetWard(string id)
        {
            return Ok(await _locationService.GetWard(id));
        }

    }
}
