import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hero } from '../hero';

const HEROES: Hero[] = [
  { id: '12', name: 'Dr. Nice' },
  { id: '13', name: 'Bombasto' },
  { id: '14', name: 'Celeritas' },
  { id: '15', name: 'Magneta' },
  { id: '16', name: 'RubberMan' },
  { id: '17', name: 'Dynama' },
  { id: '18', name: 'Dr. IQ' },
  { id: '19', name: 'Magma' },
  { id: '20', name: 'Tornado' }
];


@Injectable({
  providedIn: 'root'
})
export class HeroesManagementService {

  private heroesSubject =  new BehaviorSubject<Hero[]>([])
  public heroes$: Observable<Hero[]> = this.heroesSubject.asObservable()

  constructor() {
    setTimeout(() => {
      this.heroesSubject.next(HEROES)
    }, 1200)

    setTimeout(() => {
      this.heroesSubject.next([])
    }, 4200)

    setTimeout(() => {
      this.heroesSubject.next(HEROES)
    }, 10200)
  }


}
