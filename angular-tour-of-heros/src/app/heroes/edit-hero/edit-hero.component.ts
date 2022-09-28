import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})

export class EditHeroComponent implements OnInit {
  @Input() hero?:Hero
  @Input() status?:string

  //hero2: Hero = { id:'xyz', name: 'Superman' }

  constructor() { }

  ngOnInit(): void {
  }

}
