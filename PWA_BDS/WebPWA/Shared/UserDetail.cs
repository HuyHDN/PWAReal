using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebPWA.Shared
{
    public class UserDetailInfo
    {
        public string FullName { get; set; }
        [StringLength(12, ErrorMessage = "Số điện thoại không hợp lệ (nhỏ hơn 12 số)")]
        public string Phone { get; set; }
        public string Address { get; set; }
    }
}
