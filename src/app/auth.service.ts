import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './users/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/user/all"
  tokenURL: string = environment.apiURLBase + environment.tokenURL
  clientID: string = environment.clientId
  clientSecret: string = environment.clientSecret

  constructor( private http: HttpClient ) { }

  salvar(user: Users) : Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }

  tryLogin( username: string, password: string ) : Observable<any>{
    const params =new  HttpParams().set('username', username)
                                   .set('password', password)
                                   .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic' + btoa(`${this.clientID}:${this.clientSecret}`)
    }

    return this.http.post(this.tokenURL, params.toString(), {headers} );
  }
}
