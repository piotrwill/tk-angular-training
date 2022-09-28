import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { id: '4711', name: 'Spiderman' }

  onHeroChanged(hero: Hero) {
    console.log('onHeroChanged', hero)
    this.hero = hero
  }

  constructor() {
    const x1 = 'Das ist ein guter String'
    const x2 = "Das ist ein schlechter String per Konvention"
    const x3 = `Das ist ein String im String ${x1}`
    const x4 = `Ich benutz es aber nicht, also schlecht`

   }

  ngOnInit(): void {
  }

}
