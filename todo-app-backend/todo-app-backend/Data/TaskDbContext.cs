using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using todo_app_backend.Models;

namespace todo_app_backend.Data
{
    public class TaskDbContext: IdentityDbContext<User, IdentityRole<int>, int>
    {
        public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options)
        {

        }
        public DbSet<Models.Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Models.Task>()
                .HasOne(t => t.User)      
                .WithMany(u => u.Tasks)      
                .HasForeignKey(t => t.UserID); 

            base.OnModelCreating(modelBuilder);
        }
    }
}
