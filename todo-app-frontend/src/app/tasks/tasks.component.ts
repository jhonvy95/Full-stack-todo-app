import { Component } from '@angular/core';
import { Task } from '../core/dto/task.dto';
import { TaskService } from '../core/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormDialogComponent } from '../shared/components/todo-form-dialog/todo-form-dialog.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskListComponent,
    MatFormField,
    MatLabel,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filterText: string = '';

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  openTodoDialog(task?: Task): void {
    const dialogRef = this.dialog.open(TodoFormDialogComponent, {
      width: '500px',
      data: { task },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshTasks();
    });
  }

  ngOnInit(): void {
    this.refreshTasks();
  }

  refreshTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.applyFilter();
    });
  }

  onFilterChange(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    const filter = this.filterText.toLowerCase().trim();
    this.filteredTasks = this.tasks.filter((task) =>
      task.title.toLowerCase().includes(filter)
    );
  }
}
