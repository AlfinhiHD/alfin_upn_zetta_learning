import { Component, Input } from '@angular/core';
import { HeroService } from '../../hero.service';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // providers: [LoggingService]
})
export class HeroComponent {
  @Input('hero') hero: {name: string, status: string};
  @Input('id') id: number;
 
  constructor(
    private loggingService: LoggingService,
    private heroService: HeroService ) {}

  onSetTo(status: string) {
    this.heroService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.heroService.statusUpdated.emit(status);
  }
}
