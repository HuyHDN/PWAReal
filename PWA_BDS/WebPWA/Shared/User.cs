using System;
using System.Collections.Generic;
using System.Text;

namespace WebPWA.Shared
{
    public class User
    {
        public Guid ID { get; set; }
        public string LoginName { get; set; }
        public string LoginPassword { get; set; }
        public string FullName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }
    }
}
