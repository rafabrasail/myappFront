import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesFormComponent } from './roles-form/roles-form.component';
import { RolesListComponent } from './roles-list/roles-list.component';

const routes: Routes = [
  {path: 'roles', children: [
    {path: 'form', component: RolesFormComponent},
    {path: 'form/:id', component: RolesFormComponent},
    {path: 'list', component: RolesListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
