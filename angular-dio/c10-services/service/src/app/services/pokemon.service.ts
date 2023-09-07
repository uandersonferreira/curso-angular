import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root', //(Fornecido em 'root') - Quem poderá ter acesso a ele
})
export class PokemonService {
  private baseURL: string = '';
  private pokeData:PokemonData | any

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  }

  getPokemon(pokemonName: string):Observable<PokemonData>{
    this.pokeData = this.httpClient
                        .get<PokemonData>
                        (`${this.baseURL}${pokemonName}`);

    return this.pokeData;
  }
} //class

/*

Service pode conversar com outros arquivos .ts ou outros
services também.

*/
