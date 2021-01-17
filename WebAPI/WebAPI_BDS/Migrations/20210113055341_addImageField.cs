using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI_BDS.Migrations
{
    public partial class addImageField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image2",
                table: "Property",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Image3",
                table: "Property",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image2",
                table: "Property");

            migrationBuilder.DropColumn(
                name: "Image3",
                table: "Property");
        }
    }
}
