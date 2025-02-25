using Microsoft.EntityFrameworkCore;
using BackendApi.Models;

namespace BackendApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Borrower> Borrowers { get; set; }
        public DbSet<PrefixLookup> PrefixLookups { get; set; }
        public DbSet<BorrowerStatusLookup> BorrowerStatusLookups { get; set; }
        public DbSet<AccountStatusLookup> AccountStatusLookups { get; set; }
        public DbSet<Employer> Employers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Borrower>()
                .HasOne(b => b.Employer)
                .WithMany()
                .HasForeignKey(b => b.EmployerId);

            modelBuilder.Entity<Borrower>()
                .HasOne(b => b.PrefixLookup)
                .WithMany(p => p.Borrowers)
                .HasForeignKey(b => b.Prefix);

            modelBuilder.Entity<Borrower>()
                .HasOne(b => b.BorrowerStatusLookup)
                .WithMany(bs => bs.Borrowers)
                .HasForeignKey(b => b.BorrowerStatus)
                .IsRequired(false);

            modelBuilder.Entity<Borrower>()
                .HasOne(b => b.AccountStatusLookup)
                .WithMany(a => a.Borrowers)
                .HasForeignKey(b => b.AccountStatus)
                .IsRequired(false);
        }
    }
}