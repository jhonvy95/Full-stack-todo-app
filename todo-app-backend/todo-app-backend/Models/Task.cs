namespace todo_app_backend.Models
{
    public class Task
    {
        public int ID { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime DueDate { get; set; }

        public int UserID { get; set; } 
        public required User User { get; set; }
    }
}
