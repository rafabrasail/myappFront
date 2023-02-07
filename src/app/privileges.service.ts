import { Injectable } from '@angular/core';
import { Privileges } from './privileges/privileges';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {

  constructor( private http : HttpClient ) { }

  apiURL: string = environment.apiURLBase + '/privilege'

  salvar( privileges: Privileges) : Observable<Privileges> {
    return this.http.post<Privileges>(`${this.apiURL}`, privileges);
  }
  
  atualizar ( privileges: Privileges ) : Observable<any> {
    return this.http.put<Privileges>(`${this.apiURL}/${privileges.id}`, privileges);
  }

  getAllPrivilege() : Observable<Privileges[]> {
    return this.http.get<Privileges[]>(this.apiURL);
  }

  getPrivilegeById(id: number) : Observable<Privileges> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(privilege: Privileges) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${privilege.id}`);
  }

}
