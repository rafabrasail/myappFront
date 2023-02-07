import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/roles.service';
import { Roles } from '../roles';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles: Roles[] = [];
  roleSelected: Roles;
  mensagemSuccess: string;
  mensagemError: string;

  constructor( private service: RolesService,
               private router: Router ) { }

  ngOnInit(): void {
    this.service.getAllRoles().subscribe(res => this.roles = res);
  }

  novaRole(){
    this.router.navigate(['/roles/form'])
  }

  prepaerDelete(role: Roles){
    this.roleSelected = role;
  }

  deleteRole(){
    this.service.deletar(this.roleSelected).subscribe(res => {
      this.mensagemSuccess = "Role excluida";
      this.ngOnInit();
    }, error => this.mensagemError = "Ocorreu um erro na exlusão da role!")
  }

}
