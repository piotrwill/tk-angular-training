import { Component, OnInit } from '@angular/core';
import { HeroesManagementService } from '../services/heroes-management.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  heroCount = 0
  constructor(private heroesManagement: HeroesManagementService) { }

  ngOnInit(): void {
    this.heroCount = this.heroesManagement.loadedHeroes.length
  }

}
