using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebRealEste.Shared
{
    public class UserDetail
    {
        [Required]
        public string FullName { get; set; }
        [StringLength(12, ErrorMessage = "Số điện thoại không hợp lệ (nhỏ hơn 12 số)")]
        public string Phone { get; set; }
        public string Address { get; set; }

        public static implicit operator UserDetail(User user)
        {
            return new UserDetail
            {
                FullName = user.FullName,
                Phone = user.Phone,
                Address = user.Address
            };
        }
    }
}
