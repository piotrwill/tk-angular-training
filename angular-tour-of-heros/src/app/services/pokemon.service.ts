import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { forkJoin, map, Observable, switchMap, timer } from 'rxjs';

export interface Pokemon {
  id: number,
  name: string,
  url: string
}

const url = 'https://pokeapi.co/api/v2/pokemon'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // fetching data from pokeapi.co
  constructor(private http: HttpClient) { }

  getPokemons$(): Observable<Array<Pokemon>> {
    const first = this.http.get<{ results: Pokemon[]}>(`${url}?limit=4`)
    const second = this.http.get<{ results: Pokemon[]}>(`${url}?offset=4&limit=6`)
    const delay = timer(3000)
    return forkJoin({first, second, delay})
      .pipe(
        map((data) => {
          console.log(data)
          return data
        }),
        map(({first, second}) => [...first.results, ...second.results])
        )
  }

  getPokemonsSwitched$(): Observable<Array<Pokemon>> {
    const first = this.http.get<{ results: Pokemon[]}>(`${url}?limit=4`)
    const second = this.http.get<{ results: Pokemon[]}>(`${url}?skip=4&limit=6`)
    return first
      .pipe(
        switchMap((firstData) => {
          console.log('firstData', firstData)
          return second.pipe(map((secondData) => [...firstData.results, ...secondData.results]))
        })
      )
  }
}
