using System;
using System.Collections.Generic;
using System.Text;

namespace WebRealEste.Shared
{
    public class UserSession
    {
        public Guid UserID { get; set; }
        public string LoginName { get; set; }
        public string RoleCode { get; set; }
    }
}
