import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  login(form_login: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/api/token/`, 
      form_login
      
    );
  }

  refreshAccessToken(refreshToken: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/api/token/refresh/`, {
      refresh: refreshToken,
    });
  }
}
