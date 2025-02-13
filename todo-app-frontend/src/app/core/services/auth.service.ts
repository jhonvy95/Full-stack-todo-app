import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { Observable } from 'rxjs';
import { RegisterDto } from '../dto/resgister.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://localhost:44306/api/auth';

  login(data: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }

  register(data: RegisterDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }
}
