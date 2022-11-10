import { Component } from '@angular/core';
import { HeroService } from '../../hero.service';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css'],
  // providers: [LoggingService]
})
export class NewHeroComponent {
  
  constructor(
    private loggingService: LoggingService,
    private heroService: HeroService) {

      this.heroService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      )
    }

  onCreateHero(heroName: string, heroStatus: string, heroImg: string, heroDet: string) {
    this.heroService.addHero(heroName, heroStatus,  heroImg, heroDet);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
