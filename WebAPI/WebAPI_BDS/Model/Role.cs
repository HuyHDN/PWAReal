using System;
using System.Collections.Generic;

namespace WebAPI_BDS.Model
{
    public class Role
    {
        
        public Guid ID { get; set; }
        public string RoleName { get; set; }
        public string Code { get; set; }
        public ICollection<UserRole> UserRoles { get; set;}

    }
}
