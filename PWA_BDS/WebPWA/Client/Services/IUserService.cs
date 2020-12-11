using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPWA.Shared;

namespace WebPWA.Client.Services
{
    public interface IUserService
    {
        Task<ServiceResponse<List<User>>> GetAllUser();
        Task LoginUser(UserLogin user);
    }
}
