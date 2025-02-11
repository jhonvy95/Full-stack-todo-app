using Microsoft.AspNetCore.Identity;

namespace todo_app_backend.Models
{
    public class User : IdentityUser<int>
    {
        public required string Name { get; set; }
        public required ICollection<Task> Tasks { get; set; }
    }
}
