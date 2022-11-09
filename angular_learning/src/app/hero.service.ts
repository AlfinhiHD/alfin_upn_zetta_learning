import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class HeroService {
    heroes = [
        {
          name: 'Superman',
          status: 'superheroes'
        },
        {
          name: 'Deadpool',
          status: 'netral'
        },
        {
          name: 'Thanos',
          status: 'villain'
        }
      ];
    
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    addHero(name: string, status: string) {
        this.heroes.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.heroes[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}