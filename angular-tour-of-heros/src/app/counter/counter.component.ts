import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroesManagementService } from '../services/heroes-management.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  heroesSubscription?: Subscription
  heroCount = 0
  constructor(private heroesManagement: HeroesManagementService) { }

  ngOnInit(): void {
    this.heroesSubscription = this.heroesManagement.heroes$.subscribe((newHeroes) => {
      console.log('...new data arrived', newHeroes)
      this.heroCount = newHeroes.length
    })
  }

  ngOnDestroy(): void {
    this.heroesSubscription?.unsubscribe()
  }
}
