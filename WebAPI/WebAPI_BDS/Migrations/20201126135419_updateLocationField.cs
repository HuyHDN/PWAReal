using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI_BDS.Migrations
{
    public partial class updateLocationField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ParentLocationID",
                table: "Location",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Location_LocationTypeID",
                table: "Location",
                column: "LocationTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Location_ParentLocationID",
                table: "Location",
                column: "ParentLocationID");

            migrationBuilder.AddForeignKey(
                name: "FK_Location_Location_ParentLocationID",
                table: "Location",
                column: "ParentLocationID",
                principalTable: "Location",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Location_LocationType_LocationTypeID",
                table: "Location",
                column: "LocationTypeID",
                principalTable: "LocationType",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Location_Location_ParentLocationID",
                table: "Location");

            migrationBuilder.DropForeignKey(
                name: "FK_Location_LocationType_LocationTypeID",
                table: "Location");

            migrationBuilder.DropIndex(
                name: "IX_Location_LocationTypeID",
                table: "Location");

            migrationBuilder.DropIndex(
                name: "IX_Location_ParentLocationID",
                table: "Location");

            migrationBuilder.DropColumn(
                name: "ParentLocationID",
                table: "Location");
        }
    }
}
