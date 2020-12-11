using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPWA.Shared
{
    public class CodeType
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public Guid ParentID { get; set; }
    }
}
