using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_BDS.Model
{
    public class Location
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public Guid? ParentID { get; set; }
        public Location ParentLocation { get; set; }
        public Guid LocationTypeID { get; set; }
        public LocationType LocationType { get; set; }
        public string FullPath { get; set; }
    }
}
