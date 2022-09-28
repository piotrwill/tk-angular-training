import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroesManagementService } from '../../services/heroes-management.service';
import { Hero } from '../../hero';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  @Output() heroChanged = new EventEmitter<Hero>()

  heroes: Hero[] = []
  selectedHero: Hero | undefined

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.heroChanged.emit(hero)
  }

  constructor(private heroesManagement: HeroesManagementService) { }

  ngOnInit(): void {
    this.heroes = this.heroesManagement.loadedHeroes
  }

}
