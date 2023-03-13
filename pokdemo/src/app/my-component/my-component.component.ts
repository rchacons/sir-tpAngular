import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponent {
  
  id: string="";

  pokemonList : Pokemon[];
  selectedPokemon? : Pokemon;
  searchText = "";

  constructor(){
    this.pokemonList = [
      new Pokemon(1,"Bulbasaur"),
      new Pokemon(4,"Charmander"),
      new Pokemon(7,"Squirtle"),
      new Pokemon(10,"Caterpie"),
      new Pokemon(16,"Pidgey")
    ]
      
  }

  onButtonClick(pokemon? : Pokemon){
    console.log("id : "+pokemon?.id+", name : "+pokemon?.name)
  }


  
}
