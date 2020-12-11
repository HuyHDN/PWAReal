using System;

namespace WebAPI_BDS.Model
{
    public class UserRole
    {
        public Guid ID { get; set; }
        public Guid UserID { get; set; }
        public Guid RoleID { get; set; }

        public User User { get; set; }
        public Role Role { get; set; }
    }
}
