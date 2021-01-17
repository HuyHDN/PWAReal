using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using WebRealEste.Shared;
namespace WebRealEste.Client.ViewModel
{
    public class UserViewModel
    {
        public Guid ID { get; set; }
        [Required, EmailAddress]
        public string LoginName { get; set; }
        [Required]
        public string LoginPassword { get; set; }
        [Required, Compare("LoginPassword", ErrorMessage = "Mật khẩu không giống nhau")]
        public string ConfirmPassword { get; set; }
        [Required]
        public string FullName { get; set; }
        [StringLength(12, ErrorMessage = "Số điện thoại không hợp lệ (nhỏ hơn 12 số)")]
        public string Phone { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }

        private HttpClient httpClient;

        public UserViewModel()
        {

        }

        public UserViewModel(HttpClient http)
        {
            httpClient = http;
        }

        public async Task<List<User>> GetAllUser()
        {
            ServiceResponse<List<User>> userResponse = new ServiceResponse<List<User>>();
            userResponse = await httpClient.GetFromJsonAsync<ServiceResponse<List<User>>>(Config.Config.ApiUrl + "/User/GetAllUser");
            if (userResponse != null)
                return userResponse.Data;
            return null;
        }

        public async Task<User> GetUserByID(Guid id)
        {
            ServiceResponse<User> userResponse = new ServiceResponse<User>();
            User u = new User();
            userResponse = await httpClient.GetFromJsonAsync<ServiceResponse<User>>(Config.Config.ApiUrl + "/User/GetUserByID/" + id.ToString());
            if (userResponse != null)
                u = userResponse.Data;
            LoadCurrentObject(u);
            return u;
        }

        public async Task<User> GetUserByLoginName(string loginName)
        {
            ServiceResponse<User> userResponse = new ServiceResponse<User>();
            User u = new User();
            userResponse = await httpClient.GetFromJsonAsync<ServiceResponse<User>>(Config.Config.ApiUrl + "/User/GetUserByLoginName/" + loginName);
            if (userResponse != null)
                u = userResponse.Data;
            return u;
        }

        public async Task UpdateUser(Guid id)
        {
            User user = this;
            await httpClient.PutAsJsonAsync(Config.Config.ApiUrl + "/User/UpdateUser/" + id.ToString(), user);
        }

        public async Task DeleteUser(Guid id)
        {
            await httpClient.DeleteAsync(Config.Config.ApiUrl + "/User/DeleteUser/" + id.ToString());
        }

        public async Task CreateUser()
        {
            User user = this;
            await httpClient.PostAsJsonAsync(Config.Config.ApiUrl + "/User/CreateUser/", user);
        }

        public async Task<User> LoginUser()
        {
            User user = this;
            HttpResponseMessage response = await httpClient.PostAsJsonAsync(Config.Config.ApiUrl + "/User/LoginUser/", user);
            if (response.IsSuccessStatusCode)
            {
                ServiceResponse<User> userResponse = new ServiceResponse<User>();
                User u = new User();
                userResponse = await httpClient.GetFromJsonAsync<ServiceResponse<User>>(Config.Config.ApiUrl + "/User/GetUserByLoginName/" + user.LoginName);
                if (userResponse != null)
                {
                    u = userResponse.Data;
                    return u;
                }
            }
            return null;
        }

        public async Task<string> GetUserRole(Guid userID)
        {
            ServiceResponse<string> userResponse = new ServiceResponse<string>();
            userResponse = await httpClient.GetFromJsonAsync<ServiceResponse<string>>(Config.Config.ApiUrl + "/User/GetRoleByUser/" + userID.ToString());
            if (userResponse != null)
                return userResponse.Data;
            return null;
        }

        private void LoadCurrentObject(UserViewModel userViewModel)
        {
            FullName = userViewModel.FullName;
            Phone = userViewModel.Phone;
            Address = userViewModel.Address;
        }

        public static implicit operator UserViewModel(User user)
        {
            return new UserViewModel
            {
                ID = user.ID,
                LoginName = user.LoginName,
                LoginPassword = user.LoginPassword,
                FullName = user.FullName,
                Phone = user.Phone,
                Address = user.Address,
                IsActive = user.IsActive
            };
        }

        public static implicit operator User(UserViewModel userViewModel)
        {
            return new User
            {
                ID = userViewModel.ID,
                LoginName = userViewModel.LoginName,
                LoginPassword = userViewModel.LoginPassword,
                FullName = userViewModel.FullName,
                Phone = userViewModel.Phone,
                Address = userViewModel.Address,
                IsActive = userViewModel.IsActive
            };
        }

    }
}
