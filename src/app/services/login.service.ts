import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/get_token`, credentials);
  }
}
