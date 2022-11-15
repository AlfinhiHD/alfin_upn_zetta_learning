import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './home/add-user/add-user.component';
import { UsersComponent } from './home/users/users.component';
import { EditUserComponent } from './home/users/edit-user/edit-user.component';
import { DetailUserComponent } from './home/users/detail-user/detail-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module'
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    UsersComponent,
    EditUserComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
