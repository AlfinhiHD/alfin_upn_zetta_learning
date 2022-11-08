import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddlistComponent } from './addlist/addlist.component';
import { ListElementComponent } from './list-element/list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    AddlistComponent,
    ListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
