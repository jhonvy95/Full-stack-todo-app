import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { Task } from '../../core/dto/task.dto';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormDialogComponent } from '../../shared/components/todo-form-dialog/todo-form-dialog.component';
import { TaskService } from '../../core/services/task.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-list',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    MatIconModule,
    SweetAlert2Module,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() refreshTasks: () => void = () => {};
  @Output() statusChanged = new EventEmitter<{ id: number; status: string }>();

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  statusOptions: string[] = ['Pending', 'In Progress', 'Completed'];

  onStatusChange(task: Task, newStatus: string): void {
    this.statusChanged.emit({ id: task.id!, status: newStatus });
  }

  openTodoDialog(task: Task): void {
    const dialogRef = this.dialog.open(TodoFormDialogComponent, {
      width: '400px',
      data: { task },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshTasks();
    });
  }

  OndeleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe((res: any) => {
      if (res.result) {
        Swal.fire('Task deleted successfully!', '', 'success');
      }
      this.refreshTasks();
    });
  }
}
