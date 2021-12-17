import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { StorageService } from './storage.service';

interface AuthResponse {
  jwt: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = `${environment.strapiUrl}/auth/local`;

  constructor(private http: HttpClient, private ss: StorageService) { }

  login(identifier: string, password: string) {
    return this.http.post<AuthResponse>(this.url, { identifier, password });
  }

  register(username: string, email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.url}/register`, { username, email, password });
  }

  isLoggedIn() {
    return this.ss.getItem('loggedIn') === 'true';
  }
}
