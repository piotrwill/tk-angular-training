import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Array<Pokemon> = []

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons$().subscribe({
      next: (pokemonList) => {
        this.pokemonList = pokemonList
      },
      error: (err) => console.error(err),
      complete: () => console.log('completed')
    })
  }
}
