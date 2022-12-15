import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaktorComponent } from './faktor/faktor.component';
import { PangkatComponent } from './pangkat/pangkat.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'faktor', component: FaktorComponent},
  {path: 'pangkat', component: PangkatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
