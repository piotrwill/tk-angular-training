import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    title: 'Helden',
    path: 'heroes',
    component: HeroesComponent
  },
  {
    title: 'Pokemon Figuren',
    path: 'pokemons',
    component: PokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
