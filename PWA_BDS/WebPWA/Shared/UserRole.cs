using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace WebRealEste.Shared
{
    public class UserRole
    {
        public Guid ID { get; set; }
        public Guid UserID { get; set; }
        public Guid RoleID { get; set; }

        public User User { get; set; }
        public Rule Role { get; set; }
    }
}
