import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) { }

  getTopDoctors(): Observable<any> {
    // Retrieve the token from AuthService
    const token = this.auth.getToken();

    // Set the Authorization header with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP GET request with headers
    return this.http.get<any>(`${this.apiUrl}/doctors/ranked`, { headers });
  }
}
