import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mocked-heroes'
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes = HEROES
  selectedHero: Hero | undefined

  onSelect(hero: Hero) {
    console.log('selected hero', hero)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
