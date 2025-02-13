using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todo_app_backend.Data;
using todo_app_backend.DTOs;
using todo_app_backend.Models;

namespace todo_app_backend.Controllers
{
    [Route("api/tasks")]
    [ApiController]
    [Authorize] 
    public class TaskController : ControllerBase
    {
        private readonly TaskDbContext _context;

        public TaskController(TaskDbContext context)
        {
            _context = context;
            
        }

       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Task>>> GetUserTasks()
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var tasks = await _context.Tasks.Where(t => t.UserID == userId).ToListAsync();
            return Ok(tasks);
        }

       
        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Task>> GetTaskById(int id)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var task = await _context.Tasks.FirstOrDefaultAsync(t => t.ID == id && t.UserID == userId);
            if (task == null) return NotFound();
            return Ok(task);
        }

        [HttpPost]
        public async Task<ActionResult<Models.Task>> CreateTask([FromBody] TaskDto taskDto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

           

            var task = new Models.Task
            {
                Title = taskDto.Title,
                Description = taskDto.Description,
                Status = taskDto.Status,
                CreatedDate = DateTime.UtcNow,
                DueDate = taskDto.DueDate,
                UserID = userId,
            };

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskById), new { id = task.ID }, task);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(int id, [FromBody] TaskDto taskDto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var task = await _context.Tasks.FirstOrDefaultAsync(t => t.ID == id && t.UserID == userId);
            if (task == null) return NotFound();

            task.Title = taskDto.Title;
            task.Description = taskDto.Description;
            task.Status = taskDto.Status;
            task.DueDate = taskDto.DueDate;

            await _context.SaveChangesAsync();
             return Ok(new
            {
                message = "Task Updated Successfully",
                result = true,
                });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var task = await _context.Tasks.FirstOrDefaultAsync(t => t.ID == id && t.UserID == userId);
            if (task == null) return NotFound();

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
            return Ok(new
            {
                message = "Task Deleted Successfully",
                result = true,
            });
        }
    }
 }

