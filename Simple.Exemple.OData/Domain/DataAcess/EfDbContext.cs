using Microsoft.EntityFrameworkCore;
using Simple.Exemple.OData.Domain.Entities;

namespace Simple.Exemple.OData.Domain.DataAcess
{
    public class EfDbContext : DbContext
    {
        public EfDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Collection> Collections {get;set;}
    }
}