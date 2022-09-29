import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { id: '4711', name: 'Spiderman' }

  onHeroChanged(newHero: Hero) {
    console.log('onHeroChanged', newHero)
    this.hero = newHero
  }

  constructor(private activatedRoute: ActivatedRoute) {
    // console log works because this component is activated via router-outlet in app component
    this.activatedRoute.title.subscribe((title) => console.log(title))
  }

  ngOnInit(): void {
  }

}
