import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http : HttpClient ) { }

  apiUrl: string = environment.apiURLBase + '/user'

  salvar( user: Users) : Observable<Users> {
    return this.http.post<Users>(`${this.apiUrl}`, user);
  }
  
  atualizar ( user: Users ) : Observable<any> {
    return this.http.put<Users>(`${this.apiUrl}/${user.id}`, user);
  }

  getAllUsers() : Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getUserById(id: number) : Observable<Users> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletar(user: Users) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${user.id}`);
  }
}
