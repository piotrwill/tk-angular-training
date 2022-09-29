import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

export interface Pokemon {
  id: number,
  name: string,
  url: string
}
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // fetching data from pokeapi.co
  constructor(private http: HttpClient) { }

  getPokemons$(): Observable<Array<Pokemon>> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=4', {})
      .pipe(map((data: any) => data.results as Pokemon[]))
  }

}
