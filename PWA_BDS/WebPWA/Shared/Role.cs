using System;
using System.Collections.Generic;
using System.Text;

namespace WebRealEste.Shared
{
    public class Role
    {
        public Guid ID { get; set; }
        public string RoleName { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
