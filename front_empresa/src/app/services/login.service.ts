import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// // import { jwtDecode } from 'jwt-decode';
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

  getUserInfo(): any {
    console.log('inicio formulario');
    
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      try {
        // const decodedToken = jwtDecode(accessToken);
        // console.log(decodedToken);
        // decodedToken;
        
        // return decodedToken;
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }

    return null;
  }

  isAuthenticated(): boolean {
    const accessToken = localStorage.getItem('access_token');
    // Aquí puedes realizar más validaciones según tus necesidades (por ejemplo, verificar si el token ha expirado)
    return !!accessToken;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    // this.router.navigate(['/login']);
  }
}
