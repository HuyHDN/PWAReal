﻿using System;
using WebRealEste.Shared;

namespace WebRealEste.Shared
{
    public enum Orientation
    {
        ĐÔNG, TÂY, NAM, BẮC, ĐÔNG_NAM, TÂY_NAM, ĐÔNG_BẮC, TÂY_BẮC
    }
    
    public class Property
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }
        public string Content { get; set; }
        public DateTime ValidityDateFrom { get; set; }
        public DateTime ValidityDateTo { get; set; }
        public float? Width { get; set; }
        public float? Length { get; set; }
        public int? NoOfStorey { get; set; }
        public decimal? PriceFrom { get; set; }
        public decimal? PriceTo { get; set; }
        public Guid? PropertyTypeID { get; set; }
        public Code PropertyType { get; set; }
        public float? Area { get; set; }
        public int? NoOfRooms { get; set; }
        public int? NoOfToilets { get; set; }
        public bool? IsNegotiable { get; set; }
        public Guid? OrientationID { get; set; }
        public Code Orientation { get; set; }
        public bool? HasTitle { get; set; }
        public string Address { get; set; }
        public Guid LocationID { get; set; }
        public Location Location { get; set; }
        public Guid AdsID { get; set; }
        public Code Ads { get; set; }
        public int Status { get; set; }
        public Guid CreatedUserID { get; set; }
        public User CreatedUser { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime LastModifiedDateTime { get; set; }
        public DateTime SuccessedDateTime { get; set; }
        public int ViewCount { get; set; }

        public static string StatusToString(int status)
        {
            switch (status)
            {
                case 0:
                    return "Chờ duyệt";
                case 1:
                    return "Đã duyệt";
                case 2:
                    return "Hết hạn";
                case 3:
                    return "Đã bán";
                case 4:
                    return "Chính chủ";
                case 5:
                    return "Môi giới";
            }
            return string.Empty;
        }
    }
}
