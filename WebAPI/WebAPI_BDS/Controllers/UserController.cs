using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebAPI_BDS.Model;
using WebAPI_BDS.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI_BDS.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static IUserService _userService;
        private static BdsDbContext _context;
        public UserController(IUserService userService, BdsDbContext context)
        {
            _userService = userService;
            _context = context;
        }
        // Select all user
        [HttpGet("GetAllUser")]
        public async Task<IActionResult> GetAllUser()
        {
            return Ok(await _userService.GetAllUser());
        }
        // Search user by ID
        [Route("GetUserByID/{id}")]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserByID(Guid id)
        {
            return Ok(await _userService.GetUserByID(id));
        }

        [Route("CreateUser")]
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            return Ok(await _userService.CreateNewUser(user));
        }
        
        [HttpPut("UpdateUser/{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, [FromBody] User user)
        {
            return Ok(await _userService.UpdateUser(id,user));
        }

        [Route("DeleteUser/{id}")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            return Ok(await _userService.DeleteUser(id));
        }

        [HttpPost("LoginUser")]
        public async Task<ActionResult<User>> LoginUser(User user)
        {
            User userToLogin = await _context.Users.Where(x => x.LoginName == user.LoginName && x.LoginPassword == user.LoginPassword).FirstOrDefaultAsync();
            var claim = new Claim(ClaimTypes.Name, userToLogin.LoginName);
            var claimIdentity = new ClaimsIdentity(new[] { claim }, "serverAuth");
            var claimPrincipal = new ClaimsPrincipal(claimIdentity);
            await HttpContext.SignInAsync(claimPrincipal);
            return await Task.FromResult(userToLogin);
        }
    }
}
