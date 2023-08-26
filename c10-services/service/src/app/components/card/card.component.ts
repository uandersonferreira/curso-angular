import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

//CardComponent IRÁ SE PREOCUPAR APENAS EM CONSUMIR E REDIRECIONAR
export class CardComponent implements OnInit {
  pokemon: PokemonData;

  //Irá injetar e criar a instância para ser utilizada
  constructor(private pokemonService: PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: '',
      },
      types: [],//no html utiliza o  *ngFor para pegar os dados

    };
  }

  ngOnInit(): void {
    //Pokemon default da api
    this.getPokemon('pikachu');
  }

  getPokemon(searchName:string){
    this.pokemonService.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
      },
      error: (err) => console.log('Not found'),
    });
    console.log(searchName)
  }
} //class
