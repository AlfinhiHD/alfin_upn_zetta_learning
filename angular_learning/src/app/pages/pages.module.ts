import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';



@NgModule({
  declarations: [
    UserlistComponent,
    AdduserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserlistComponent,
    AdduserComponent
  ]
})
export class PagesModule { }
