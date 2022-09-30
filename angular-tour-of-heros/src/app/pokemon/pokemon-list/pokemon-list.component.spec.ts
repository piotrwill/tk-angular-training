import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { PokemonService } from 'src/app/services/pokemon.service';

import { PokemonListComponent } from './pokemon-list.component';
import { pokemonTestResponse } from './testData';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let httpClientTestingController: HttpTestingController

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    })
    .compileComponents();
    const testBed = getTestBed()
    httpClientTestingController = testBed.get(HttpTestingController)
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the progress bar', () => {
    const fixture = TestBed.createComponent(PokemonListComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const loadingElement = compiled.querySelector("div[role='progressbar']")
    expect(loadingElement).toBeDefined()
  })

  it('should not render an error', () => {
    const fixture = TestBed.createComponent(PokemonListComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const errorElement = compiled.querySelector("div[role='alert']")
    expect(errorElement).toBeNull()
  })

  it('should render a pokemon in the list', () => {
    const fixture = TestBed.createComponent(PokemonListComponent);
    const req = httpClientTestingController.expectOne('https://pokeapi.co/api/v2/pokemon?limit=4')
    req.flush(pokemonTestResponse)
    fixture.detectChanges()
    const listItems = fixture.nativeElement.querySelectorAll("li.list-grou-item")
    expect(listItems?.length).toBe(4)
  })
});
