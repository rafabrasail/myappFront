import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesFormComponent } from './roles-form/roles-form.component';
import { RolesListComponent } from './roles-list/roles-list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RolesFormComponent,
    RolesListComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule
  ], exports: [
    RolesFormComponent,
    RolesListComponent
  ]
})
export class RolesModule { }
