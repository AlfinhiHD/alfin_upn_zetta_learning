import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './components/users/users.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule
  ],
  exports: [
    UsersModule
  ]
})
export class PagesModule { }
