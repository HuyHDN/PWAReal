using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_BDS.Model
{
    public class Code
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public Guid? ParentID { get; set; }
        public Guid CodeTypeID { get; set; }
        public CodeType CodeType { get; set; }
        public string FullPath { get; set; }
    }
}
