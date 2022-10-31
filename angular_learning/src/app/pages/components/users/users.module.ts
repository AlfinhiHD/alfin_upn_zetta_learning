import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './components/list-user/list-user.component';



@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListUserComponent
  ]
})
export class UsersModule { }
