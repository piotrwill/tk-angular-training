import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeroesComponent, EditHeroComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeroesComponent]
})
export class HeroesModule { }
