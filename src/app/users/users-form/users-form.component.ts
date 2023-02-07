import { Component, OnInit } from '@angular/core';
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

  constructor( private service: UsersService ) { 
    this.users = new Users();
  }

  ngOnInit(): void {
  }

  onSubmit(){
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
