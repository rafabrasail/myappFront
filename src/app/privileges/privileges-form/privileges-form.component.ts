import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { first, Observable } from 'rxjs';
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
  id: number;


  constructor( private service: PrivilegesService,
               private router: Router,
               private activeRoute: ActivatedRoute) { 
    this.privileges = new Privileges();
   }

  ngOnInit(): void {
    let params : Observable<Params> = this.activeRoute.params
    params.subscribe (urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service.getPrivilegeById(this.id).subscribe(response => this.privileges = response,
          errorResponse => this.privileges = new Privileges()
        )
      }
    })
  }

  backToList(){
    this.router.navigate(['/privilege/list'])
  }

  //event bind para coletar os dados passados no form e verificar no log
  clicar(){
    console.log(this.privileges)
  }

  onSubmit(){
    if(this.id){
      this.service.atualizar(this.privileges).subscribe( res => {
        this.success = true;
        this.errors = [];
        this.privileges = res;
        this.backToList();
      })
    }else {
      console.log(this.privileges)
      this.service.salvar(this.privileges).subscribe(response => {
        console.log(response)
        this.success = true;
        this.errors = [];
        this.privileges = response;
      }, errorResponse => {
        this.success = false
        this.errors=errorResponse.error.errors;
      })

    }

  }

}
