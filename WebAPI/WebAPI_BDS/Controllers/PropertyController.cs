using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using WebAPI_BDS.Model;
using WebAPI_BDS.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI_BDS.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private static IPropertyService _propertyService;
        private static BdsDbContext _context;

        public PropertyController(IPropertyService propertyService, BdsDbContext context)
        {
            _propertyService = propertyService;
            _context = context;
        }

        [HttpGet("GetPropertyType")]
        public async Task<IActionResult> GetPropertyType()
        {
            return Ok(await _propertyService.GetPropertyType());
        }

        [HttpGet("GetOrientation")]
        public async Task<IActionResult> GetOrientation()
        {
            return Ok(await _propertyService.GetOrientation());
        }

        [HttpGet("GetNewType")]
        public async Task<IActionResult> GetNewType()
        {
            return Ok(await _propertyService.GetNewType());
        }

        [HttpPost("Upload")]
        public IActionResult Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("StaticFiles", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(dbPath);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpGet("GetImage/{imageName}")]
        public IActionResult GetImage(string imageName)
        {
            var folderName = Path.Combine("StaticFiles", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
            byte[] b = System.IO.File.ReadAllBytes(pathToSave + "\\" + imageName);
            return File(b, "image/jpeg");
        }

        [Route("GetPropertyByUserID/{userID}")]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPropertyByUserID(Guid userID)
        {
            return Ok(await _propertyService.GetPropertyByUserID(userID));
        }

        [HttpGet("GetAllProperty")]
        public async Task<IActionResult> GetAllProperty()
        {
            return Ok(await _propertyService.GetAllProperty());
        }

        [Route("GetPropertyByID/{id}")]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPropertyByID(Guid id)
        {
            return Ok(await _propertyService.GetPropertyByID(id));
        }


        [Route("CreateProperty")]
        [HttpPost]
        public async Task<IActionResult> CreateProperty([FromBody] Property property)
        {
            return Ok(await _propertyService.CreateNewProperty(property));
        }

        [HttpPut("UpdateProperty/{id}")]
        public async Task<IActionResult> UpdateProperty(Guid id, [FromBody] Property property)
        {
            return Ok(await _propertyService.UpdateProperty(id, property));
        }

        [Route("DeleteProperty/{id}")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProperty(Guid id)
        {
            return Ok(await _propertyService.DeleteProperty(id));
        }

    }
}
