import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './hero/hero.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { HeroService } from './hero.service';
import { FormsModule } from '@angular/forms';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NewHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [HeroService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
