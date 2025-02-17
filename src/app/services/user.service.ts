import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../store/user.state';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.post<any>('http://localhost:5155/api/v1/users', {"name": "", "email": ""})
     .pipe(map(response => response.users));
  }
  
}
