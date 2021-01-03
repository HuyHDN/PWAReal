using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using WebAPI_BDS.Model;

namespace WebAPI_BDS.Service
{
    public class UserService : ControllerBase, IUserService
    {
        private readonly BdsDbContext _context;

        public UserService(BdsDbContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<List<User>>> GetAllUser()
        {
            ServiceResponse<List<User>> userResponse = new ServiceResponse<List<User>>();
            userResponse.Data = await _context.Users.ToListAsync();
            return userResponse;
        }

        public async Task<ServiceResponse<User>> GetUserByID(Guid userID)
        {
            ServiceResponse<User> userResponse = new ServiceResponse<User>();
            userResponse.Data = await _context.Users.Where(x => x.ID == userID).FirstOrDefaultAsync();
            return userResponse;
        }

        public async Task<ServiceResponse<User>> GetUserByLoginName(string name)
        {
            ServiceResponse<User> userResponse = new ServiceResponse<User>();
            userResponse.Data = await _context.Users.Where(x => x.LoginName == name).FirstOrDefaultAsync();
            return userResponse;
        }

        public async Task<ServiceResponse<List<User>>> CreateNewUser(User newUser)
        {
            newUser.ID = System.Guid.NewGuid();
            newUser.isActive = true;
            //Role role = await _context.Roles.Where(x => x.Code == "UC").FirstOrDefaultAsync();
            //UserRole ur = new UserRole();
            //ur.ID = System.Guid.NewGuid();
            //ur.RoleID = role.ID;
            //ur.UserID = newUser.ID;
            //_context.UserRoles.Add(ur);
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
            ServiceResponse<List<User>> userResponse = new ServiceResponse<List<User>>();
            userResponse.Data = await _context.Users.ToListAsync();
            return userResponse;
        }

        public async Task<ServiceResponse<User>> UpdateUser(Guid id, User user)
        {
            User userToUpdate = await _context.Users.Where(x => x.ID == id).FirstOrDefaultAsync();
            userToUpdate.FullName = user.FullName;
            userToUpdate.Phone = user.Phone;
            userToUpdate.Address = user.Address;
            await _context.SaveChangesAsync();
            ServiceResponse<User> userResponse = new ServiceResponse<User>
            {
                Data = userToUpdate
            };
            return userResponse;
        }

        public async Task<ServiceResponse<List<User>>> DeleteUser(Guid id)
        {
            User userToDelete = await _context.Users.Where(x => x.ID == id).FirstOrDefaultAsync();
            _context.Remove(userToDelete);
            await _context.SaveChangesAsync();
            ServiceResponse<List<User>> userResponse = new ServiceResponse<List<User>>
            {
                Data = await _context.Users.ToListAsync()
            };
            return userResponse;
        }

        public async Task<ServiceResponse<User>> LoginUser(User user)
        {
            User userToLogin = await _context.Users.Where(x => x.LoginName == user.LoginName && x.LoginPassword == user.LoginPassword).FirstOrDefaultAsync();
            ServiceResponse<User> userResponse = new ServiceResponse<User>();
            if (userToLogin != null)
            {
                var claim = new Claim(ClaimTypes.Name, userToLogin.LoginName);
                var claimIdentity = new ClaimsIdentity(new[] { claim }, "serverAuth");
                var claimPrincipal = new ClaimsPrincipal(claimIdentity);
                await HttpContext.SignInAsync(claimPrincipal);
                userResponse.Data = userToLogin;
                userResponse.Message = "Login successfully";
            }
            else
            {
                userResponse.Message = "Login fail";
                userResponse.Success = false;
            }
            return userResponse;
        }

        public async Task<ServiceResponse<string>> GetUserRole(Guid userID)
        {
            ServiceResponse<string> userResponse = new ServiceResponse<string>();
            string roleCode = string.Empty;
            User user = await _context.Users.Where(x => x.ID == userID).FirstOrDefaultAsync();
            if (user != null)
            {
                UserRole ur = await _context.UserRoles.Where(x => x.UserID == userID).FirstOrDefaultAsync();
                if (ur != null)
                {
                    Role r = await _context.Roles.Where(x => x.ID == ur.RoleID).FirstOrDefaultAsync();
                    userResponse.Data = r.Code;
                }
            }
            return userResponse;
        }
    }
}
