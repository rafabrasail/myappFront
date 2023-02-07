import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivilegesFormComponent } from './privileges-form/privileges-form.component'
import { PrivilegesListComponent } from './privileges-list/privileges-list.component' 

const routes: Routes = [
  {path: 'privilege', children: [
    {path: 'form', component: PrivilegesFormComponent},
    {path: 'list', component: PrivilegesListComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivilegesRoutingModule { }
