import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes: {name: string, status: string}[] = [];

  links = [{name: 'Home', url: '/'}, {name: 'Heroes', url: 'heroes'}];
  activeLink = this.links[0].name;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
      this.heroes = this.heroService.heroes;
  }

  route(param: {name : string, url : string} ) {
    this.activeLink = param.name
    this.router.navigate([param.url]);
  }
}
