import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../../core/services/task.service';
import { Task } from '../../../core/dto/task.dto';

@Component({
  selector: 'app-todo-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  templateUrl: './todo-form-dialog.component.html',
  styleUrl: './todo-form-dialog.component.css',
})
export class TodoFormDialogComponent {
  todoForm: FormGroup;
  statusOptions: string[] = ['Pending', 'In Progress', 'Completed']; // Opciones del select

  constructor(
    public dialogRef: MatDialogRef<TodoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task?: Task },
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.todoForm = this.fb.group({
      title: [
        data.task?.title || '',
        [Validators.required, Validators.maxLength(50)],
      ],
      description: [
        data.task?.description || '',
        [Validators.required, Validators.maxLength(200)],
      ],
      dueDate: [data.task?.dueDate || '', Validators.required],
      status: [data.task?.status || 'Pending', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      console.log('Formulario enviado:', this.todoForm.value);
      const taskData: Task = {
        ...this.todoForm.value,
      };

      console.log('Datos enviados:', taskData);

      if (this.data.task) {
        this.taskService.updateTask(taskData);
      } else {
        this.taskService.addTask(taskData);
      }

      this.dialogRef.close(taskData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
