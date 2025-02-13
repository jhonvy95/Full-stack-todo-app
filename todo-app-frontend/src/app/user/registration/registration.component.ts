import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          Swal.fire('Success!', 'User registered successfully.', 'success');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error:', err);
          Swal.fire('Error', 'Registration failed. Please try again.', 'error');
        },
      });
    }
  }
}
