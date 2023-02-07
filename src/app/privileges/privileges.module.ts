import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivilegesRoutingModule } from './privileges-routing.module';
import { PrivilegesFormComponent } from './privileges-form/privileges-form.component';
import { PrivilegesListComponent } from './privileges-list/privileges-list.component';

import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    PrivilegesFormComponent,
    PrivilegesListComponent
  ],
  imports: [
    CommonModule,
    PrivilegesRoutingModule,
    FormsModule
  ], exports: [
    PrivilegesFormComponent,
    PrivilegesListComponent
  ]
})
export class PrivilegesModule { }
