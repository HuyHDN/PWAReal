using System;
namespace WebAPI_BDS.Model
{
    public enum Orientation
    {
        ĐÔNG, TÂY, NAM, BẮC, ĐÔNG_NAM, TÂY_NAM, ĐÔNG_BẮC, TÂY_BẮC
    }
    public enum Status
    {
        CHỜ_DUYỆT, ĐÃ_DUYỆT, HẾT_HẠN, ĐÃ_BÁN, CHÍNH_CHỦ, MÔI_GIỚI
    }
    public class Property
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
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
        
    }
}
