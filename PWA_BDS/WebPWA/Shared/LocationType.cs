using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebRealEste.Shared
{
    public class LocationType
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public Guid ParentID { get; set; }
    }
}
