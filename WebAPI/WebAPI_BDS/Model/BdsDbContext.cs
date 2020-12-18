using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_BDS.Model
{
    public class BdsDbContext : DbContext
    {
        public BdsDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Property> Property { get; set; }
        public DbSet<Location> Location { get; set; }
        public DbSet<LocationType> LocationType { get; set; }
        public DbSet<Code> Code { get; set; }
        public DbSet<CodeType> CodeType { get; set; }
        //public DbSet<Ads> Ads { get; set; }
        //public DbSet<TypeOfAds> TypeOfAds { get; set; }
        public DbSet<News> News { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Role>().ToTable("Role");
            modelBuilder.Entity<Property>().ToTable("Property");
            modelBuilder.Entity<Location>().ToTable("Location");
            modelBuilder.Entity<LocationType>().ToTable("LocationType");
            modelBuilder.Entity<Code>().ToTable("Code");
            modelBuilder.Entity<CodeType>().ToTable("CodeType");

            modelBuilder.Entity<Property>().Property(x => x.PriceFrom).HasPrecision(19, 4);
            modelBuilder.Entity<Property>().Property(x => x.PriceTo).HasPrecision(19, 4);
            modelBuilder.Entity<Property>().Property(x => x.IsNegotiable).HasDefaultValue(true);
            modelBuilder.Entity<Property>().Property(x => x.HasTitle).HasDefaultValue(true);

            modelBuilder.Entity<Property>()
                        .HasOne(p => p.PropertyType)
                        .WithMany()
                        .HasForeignKey(p => p.PropertyTypeID);

            //modelBuilder.Entity<Ads>().ToTable("Ads");
            //modelBuilder.Entity<TypeOfAds>().ToTable("TypeOfAds");
            //modelBuilder.Entity<PropertyType>().ToTable("PropertyType");

            modelBuilder.Entity<News>().ToTable("News");
            
        }
    }
}
