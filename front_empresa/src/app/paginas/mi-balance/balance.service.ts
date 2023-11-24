import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class BalanceService {

 private apiUrl = 'http://tu-api-django/acciones/';

 constructor(private http: HttpClient) { }

 getAcciones(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
 }

}