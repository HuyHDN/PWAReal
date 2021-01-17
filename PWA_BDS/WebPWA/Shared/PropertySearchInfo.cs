using System;
using System.Collections.Generic;
using System.Text;

namespace WebRealEste.Shared
{
    public class PropertySearchInfo
    {
        public string Title { get; set; }
        public Guid SelectedLocation { get; set; }
        public Guid SelectedCate { get; set; }
        public Guid SelectedOri { get; set; }
        public int Price { get; set; }
        public int Area { get; set; }
        public int Room { get; set; }
    }
}
