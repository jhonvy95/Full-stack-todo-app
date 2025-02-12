namespace todo_app_backend.DTOs
{
    public class TaskDto
    {
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Status { get; set; }
        public DateTime DueDate { get; set; }
        public int UserID { get; set; }
    }
}
