using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPWA.Shared;

namespace WebAPI_BDS.Model
{
    public class News
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string ImageDes { get; set; }
        public string Content { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime ModifiedDatetime { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
    }
}
