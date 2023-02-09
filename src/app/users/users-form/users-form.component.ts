import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/users.service';
import { Users } from '../users';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  users: Users;
  successForm: boolean = false;
  errorsForm: string[];
  id: number;

  constructor( private service: UsersService,
               private router: Router,
               private activedRoute: ActivatedRoute ) { 
    this.users = new Users();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activedRoute.params;
    params.subscribe (urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service.getUserById(this.id).subscribe( res => this.users = res,
          errorsResponse => this.users = new Users()
        )
      }
    })
  }

  backToList(){
    this.router.navigate(['/users/list']);
  }

  onSubmit(){
    if(this.id){
      this.service.atualizar(this.users).subscribe( res => {
        this.successForm = true;
        this.errorsForm = [];
        this.users = res;
        this.backToList();
      })
    } else {
      console.log(this.users)
      this.service.salvar(this.users).subscribe(res => {
        console.log(res)
        this.successForm = true;
        this.errorsForm = [];
        this.users = res;
      }, errorResponse => {
        this.errorsForm=['Erro ao atualizar usuário']
      })
    }

  }

}
