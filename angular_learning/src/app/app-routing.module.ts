import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './home/add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { DetailUserComponent } from './home/users/detail-user/detail-user.component';
import { EditUserComponent } from './home/users/edit-user/edit-user.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'add-user', component: AddUserComponent},
  {path:'edit-user', component: EditUserComponent},
  {path:'detail-user', component: DetailUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
