using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI_BDS.Migrations
{
    public partial class updateProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Orientation",
                table: "Property");

            migrationBuilder.AddColumn<Guid>(
                name: "OrientationID",
                table: "Property",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Property_OrientationID",
                table: "Property",
                column: "OrientationID");

            migrationBuilder.AddForeignKey(
                name: "FK_Property_Code_OrientationID",
                table: "Property",
                column: "OrientationID",
                principalTable: "Code",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Property_Code_OrientationID",
                table: "Property");

            migrationBuilder.DropIndex(
                name: "IX_Property_OrientationID",
                table: "Property");

            migrationBuilder.DropColumn(
                name: "OrientationID",
                table: "Property");

            migrationBuilder.AddColumn<int>(
                name: "Orientation",
                table: "Property",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
