using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace bookNookStarterCode.Migrations
{
    /// <inheritdoc />
    public partial class ImageModelUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5cb5aabb-5fb0-4662-a7b7-a5fc54624f1b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "68e0c756-6451-41e0-804a-9e760bbb4e9d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "46d5f3c9-18e3-4491-a1cb-4d4a443a948b", null, "User", "USER" },
                    { "a1f62280-8712-4021-b332-b6ba6df5104f", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "46d5f3c9-18e3-4491-a1cb-4d4a443a948b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a1f62280-8712-4021-b332-b6ba6df5104f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5cb5aabb-5fb0-4662-a7b7-a5fc54624f1b", null, "User", "USER" },
                    { "68e0c756-6451-41e0-804a-9e760bbb4e9d", null, "Admin", "ADMIN" }
                });
        }
    }
}
