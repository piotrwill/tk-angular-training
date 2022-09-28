import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mocked-heroes'
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes = HEROES
  
  constructor() { }

  ngOnInit(): void {
  }

}
