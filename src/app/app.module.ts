import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateModule } from './template/template.module'
import { UsersModule } from './users/users.module';
import { PrivilegesModule } from './privileges/privileges.module';
import { RolesModule } from './roles/roles.module';
import { PrivilegesService } from './privileges.service';
import { RolesService } from './roles.service';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TemplateModule,
    UsersModule,
    PrivilegesModule,
    RolesModule

  ],
  providers: [
    PrivilegesService,
    RolesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
