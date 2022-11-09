import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './heroes/hero/hero.component';
import { NewHeroComponent } from './heroes/new-hero/new-hero.component';
import { HeroService } from './hero.service';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { LoggingService } from './logging.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module'

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NewHeroComponent,
    HomeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MaterialExampleModule
    
  ],
  providers: [HeroService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
