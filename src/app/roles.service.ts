import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from './roles/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor( private http : HttpClient ) { }

  apiURL: string = environment.apiURLBase + '/roles'

  salvar( roles: Roles) : Observable<Roles> {
    return this.http.post<Roles>(`${this.apiURL}`, roles);
  }
  
  atualizar ( roles: Roles ) : Observable<any> {
    return this.http.put<Roles>(`${this.apiURL}/${roles.id}`, roles);
  }

  getAllRoles() : Observable<Roles[]> {
    return this.http.get<Roles[]>(this.apiURL);
  }

  getRoleById(id: number) : Observable<Roles> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(roles: Roles) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${roles.id}`);
  }
}
