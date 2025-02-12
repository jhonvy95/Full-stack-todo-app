import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { Task } from '../../core/dto/task.dto';
import { MatIconModule } from '@angular/material/icon';

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
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() statusChanged = new EventEmitter<{ id: number; status: string }>();

  statusOptions: string[] = ['Pending', 'In Progress', 'Completed'];

  onStatusChange(task: Task, newStatus: string): void {
    this.statusChanged.emit({ id: task.id!, status: newStatus });
  }

  openTodoDialog(task: Task): void {
    // Lógica para abrir el modal de edición
  }

  deleteTask(id: number): void {
    // Lógica para eliminar tarea
  }
}
