import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrivilegesService } from 'src/app/privileges.service';
import { Privileges } from '../privileges';

@Component({
  selector: 'app-privileges-list',
  templateUrl: './privileges-list.component.html',
  styleUrls: ['./privileges-list.component.css']
})
export class PrivilegesListComponent implements OnInit {

  privileges: Privileges[] = [];
  privilegeSelected: Privileges;
  mensagemSuccess: string;
  mensagemError: string;

  constructor( private service: PrivilegesService,
               private router: Router ) { }

  ngOnInit(): void {
    this.service.getAllPrivilege()
                .subscribe( resposta => this.privileges = resposta );
  }

  novoPrivilegio(){
    this.router.navigate(['/privilege/form'])
  }

  prepaerDelete(privilege: Privileges){
    this.privilegeSelected = privilege;
  }

  deletePrivilege(){
    this.service.deletar(this.privilegeSelected)
                .subscribe(response => {
                  this.mensagemSuccess = "Privilegio deletado com sucesso"
                  this.ngOnInit();
                }, error => this.mensagemError = 'Ocorreu um erro ao deletar privilegio'
                )
  }

}
