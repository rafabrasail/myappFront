import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  id: number;

  constructor( private service: RolesService,
               private router: Router,
               private activeRoute: ActivatedRoute ) { 
    this.roles = new Roles();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activeRoute.params
    params.subscribe (urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service.getRoleById(this.id).subscribe(response => this.roles = response,
          errorResponse => this.roles = new Roles()
        )
        this.backToList()
      }
    })
  }

  backToList(){
    this.router.navigate(['/roles/list'])
  }

  onSubmit(){
    if(this.id){
      this.service.atualizar(this.roles).subscribe( res => {
        this.successForm = true;
        this.errorsForm = [];
        this.roles = res;
        this.backToList();
      })
    } else {
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

}
