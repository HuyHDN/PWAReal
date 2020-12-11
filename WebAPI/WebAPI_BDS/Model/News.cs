using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_BDS.Model
{
    public class News
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Content { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime ModifiedDatetime { get; set; }
        public Guid UserID { get; set; }
        public User User { get; set; }
    }
}
