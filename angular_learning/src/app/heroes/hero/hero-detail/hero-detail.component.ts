import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: {name: string, status: string, img: string, det: string };
  temp: {name: string, status: string, img: string, det: string}[]
  i: number


  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.temp = this.heroService.heroes
    this.i = this.temp.findIndex(item => { return item.name === this.route.snapshot.params['name']})
    this.hero = {
      name: this.temp[this.i].name,
      status: this.temp[this.i].status,
      img: this.temp[this.i].img,
      det: this.temp[this.i].det
    }
    this.route.params
      .subscribe(
        (params) => {
          this.hero.name = params['name'],
          this.hero.status = this.temp[this.i].status,
          this.hero.img = this.temp[this.i].img,
          this.hero.det = this.temp[this.i].det
        }
      )
  }

}
