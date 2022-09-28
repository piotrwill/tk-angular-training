import { Component, OnInit } from '@angular/core';
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

  constructor() {
 
  }

  ngOnInit(): void {
  }

}
