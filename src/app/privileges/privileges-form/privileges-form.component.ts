import { Component, OnInit } from '@angular/core';
import { PrivilegesService } from 'src/app/privileges.service';
import { Privileges } from '../privileges';


@Component({
  selector: 'app-privileges-form',
  templateUrl: './privileges-form.component.html',
  styleUrls: ['./privileges-form.component.css']
})
export class PrivilegesFormComponent implements OnInit {

  privileges: Privileges;
  success: boolean = false;
  errors: String[];

  constructor( private service: PrivilegesService) { 
    this.privileges = new Privileges();
   }

  ngOnInit(): void {
  }

  //event bind para coletar os dados passados no form e verificar no log
  clicar(){
    console.log(this.privileges)
  }

  onSubmit(){
    console.log(this.privileges)
    this.service.salvar(this.privileges).subscribe(response => {
      console.log(response)
      this.success = true;
      this.errors = [];
      this.privileges = response;
    }, errorResponse => {
      this.errors=['Erro ao atualizar privilegio']
    })
  }

}
