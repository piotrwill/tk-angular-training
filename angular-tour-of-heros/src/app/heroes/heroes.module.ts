import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';



@NgModule({
  declarations: [HeroesComponent, EditHeroComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroesComponent]
})
export class HeroesModule { }
