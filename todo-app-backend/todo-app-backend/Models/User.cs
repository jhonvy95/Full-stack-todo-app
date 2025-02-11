namespace todo_app_backend.Models
{
    public class User
    {
        public int ID { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }

        public required ICollection<Task> Tasks { get; set; }
    }
}
