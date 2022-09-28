import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mocked-heroes'
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  @Output() heroChanged = new EventEmitter<Hero>()

  heroes = HEROES
  selectedHero: Hero | undefined

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.heroChanged.emit(hero)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
