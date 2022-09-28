import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { HeroesManagementService } from '../../services/heroes-management.service';
import { Hero } from '../../hero';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit, OnDestroy {

  @Output() heroChanged = new EventEmitter<Hero>()

  heroesSubscription?: Subscription
  heroes: Hero[] = []
  selectedHero: Hero | undefined

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.heroChanged.emit(hero)
  }

  constructor(private heroesManagement: HeroesManagementService) { }
  ngOnDestroy(): void {
    this.heroesSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.heroesSubscription = this.heroesManagement.heroes$.subscribe((newHeroes) => {
      console.log('...new data arrived', newHeroes)
      this.heroes = newHeroes
    })
  }

}
