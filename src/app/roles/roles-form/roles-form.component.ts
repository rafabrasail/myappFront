import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/roles.service';
import { Roles } from '../roles';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css']
})
export class RolesFormComponent implements OnInit {

  roles: Roles
  successForm: boolean = false;
  errorsForm: string[];

  constructor( private service: RolesService ) { 
    this.roles = new Roles();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.roles)
    this.service.salvar(this.roles).subscribe(res => {
      console.log(res)
      this.successForm = true;
      this.errorsForm = [];
      this.roles = res;
    }, errorResponse => {
      this.errorsForm = ["Erro ao atualizar role"]
    })
  }

}
