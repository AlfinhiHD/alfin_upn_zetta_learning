import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class HeroService {
    heroes = [
        {
          name: 'Superman',
          status: 'superheroes',
          img: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
          det: 'Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938).'
        },
        {
          name: 'Deadpool',
          status: 'netral',
          img: 'https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg',
          det: 'Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.'
        },
        {
          name: 'Thanos',
          status: 'villain',
          img: 'http://asset-a.grid.id/photo/2018/07/10/349354716.jpg',
          det: 'Thanos is a supervillain appearing in American comic books published by Marvel Comics. He was created by writer-artist Jim Starlin, and first appeared in The Invincible Iron Man #55. '
        }
      ];
    
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    addHero(name: string, status: string, img: string, det: string) {
        this.heroes.push({name: name, status: status, img: img, det: det});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.heroes[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}