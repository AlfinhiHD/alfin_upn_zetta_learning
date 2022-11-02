import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';




@NgModule({
  declarations: [
    UserlistComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserlistComponent,
    UserdetailsComponent
  ]
})
export class PagesModule { }
