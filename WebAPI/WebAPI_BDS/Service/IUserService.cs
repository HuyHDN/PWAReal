using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_BDS.Model;

namespace WebAPI_BDS.Service
{
    public interface IUserService
    {
        Task<ServiceResponse<List<User>>> GetAllUser();
        Task<ServiceResponse<User>> GetUserByID(Guid userID);
        Task<ServiceResponse<User>> GetUserByLoginName(string name);
        Task<ServiceResponse<List<User>>> CreateNewUser(User newUser);
        Task<ServiceResponse<User>> UpdateUser(Guid id,User user);
        Task<ServiceResponse<List<User>>> DeleteUser(Guid id);
        Task<ServiceResponse<User>> LoginUser(User user);
        
    }
}
