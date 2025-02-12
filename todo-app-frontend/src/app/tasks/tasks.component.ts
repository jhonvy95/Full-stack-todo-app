import { Component } from '@angular/core';
import { Task } from '../core/dto/task.dto';
import { TaskService } from '../core/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormDialogComponent } from '../shared/components/todo-form-dialog/todo-form-dialog.component';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  openTodoDialog(task?: Task): void {
    const dialogRef = this.dialog.open(TodoFormDialogComponent, {
      width: '500px',
      data: { task },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (task) {
          // Actualizar tarea
          const updatedTask: Task = {
            ...task,
            title: result.title,
            description: result.description,
            status: result.status,
            dueDate: result.dueDate,
          };

          this.taskService.updateTask(updatedTask).subscribe(() => {
            this.refreshTasks();
          });
        } else {
          // Agregar nueva tarea
          const newTask: Task = {
            title: result.title,
            description: result.description,
            status: result.status,
            createdDate: new Date(),
            dueDate: result.dueDate,
          };

          this.taskService.addTask(newTask).subscribe(() => {
            this.refreshTasks();
          });
        }
      }
    });
  }
  refreshTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
