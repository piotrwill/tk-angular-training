import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { UserListComponent } from './users/user-list/user-list.component';

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
  },
  {
    title: 'Benutzer',
    path: 'users',
    component: UserListComponent
  },
  {
    title: 'Seite nicht gefunden',
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
