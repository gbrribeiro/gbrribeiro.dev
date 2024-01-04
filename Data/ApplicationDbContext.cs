using Microsoft.EntityFrameworkCore;
using Porfolio.Models;

namespace Porfolio.Data
{
    public class ApplicationDbContext : DbContext
    {
        DbSet<ProjectViewModel> Projects { get; set; }
        DbSet<AcceptableCodes> AcceptableCodes { get; set; }
        DbSet<Message> Messages { get; set; }
        IConfiguration _configuration;
        public ApplicationDbContext(DbContextOptions options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connString = _configuration.GetConnectionString("SQLServer");
            optionsBuilder.UseSqlServer(connString);
        }
    }
}
