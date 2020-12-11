using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using WebPWA.Shared;

namespace WebPWA.Client.Services
{
    public class UserService : IUserService
    {
        private readonly HttpClient _http;

        public UserService(HttpClient http)
        {
            _http = http;
        }

        public async Task<ServiceResponse<List<User>>> GetAllUser()
        {
            return await _http.GetFromJsonAsync<ServiceResponse<List<User>>>("http://localhost:80/WebAPI/User/GetAllUser");
        }

        public async Task LoginUser(UserLogin user)
        {
            User u = new User();
            u.LoginName = user.LoginName;
            u.LoginPassword = user.Password;
            await _http.PostAsJsonAsync<User>("http://localhost/WebAPI/User/LoginUser", u);
        }
    }
}
