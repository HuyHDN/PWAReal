using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_BDS.Model
{
    public class LocationType
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public Guid? ParentID { get; set; }

        public enum LocationTyp
        {
            CITY, DISTRICT, WARD
        }

        public string GetLocationType(int type)
        {
            switch (type)
            {
                case 0: return "City";
                case 1: return "District";
                default: return "Ward";
            }
        }
    }
}
