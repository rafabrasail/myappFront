import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { Users } from '../users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Users[] = [];
  userSelected: Users;
  mensagemSuccess: string;
  mensagemError: string;

  constructor( private service: UsersService,
               private router: Router ) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(res => this.users = res);
  }

  novoUser(){
    this.router.navigate(['/user/form']);
  }

  prepaerDelete(user: Users){
    this.userSelected = user;
  }

  deleteUser(){
    this.service.deletar(this.userSelected).subscribe(res => {
      this.mensagemSuccess = "User deletado com sucesso"
      this.ngOnInit;
    }, error => this.mensagemError = "Ocorreu um erro ao deletar")
  }



}
