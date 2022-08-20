import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import data from '../pokedex.json';


// AREA DE TRABAJO --> Reemplazar por el JSON
const pokedex = data
// AREA DE TRABAJO -----------------------------------


export default class App extends Component {

  // AREA DE TRABAJO --> Usar estructura de Class Component
  state = {
    pokemons : pokedex,
    pokemon : [pokedex[0].name, pokedex[0].id, pokedex[0].type],
  }
  // AREA DE TRABAJO -------------------------------------------
  update = (Pokemon ) =>{
    this.setState(()=>{ 
    return{
      pokemon :Pokemon.dataPokemon
    }
  })}


  getPokemon = () => {
      if (this.state.pokemon[1]?.toString()?.length === 1) return `00${this.state.pokemon[1]}`
      if (this.state.pokemon[1]?.toString()?.length === 2) return `0${this.state.pokemon[1]}`
      if (this.state.pokemon[1]?.toString()?.length === 3) return `${this.state.pokemon[1]}`
  }

  getTypes = () => {
    let phrase;
    if(this.state.pokemon[2].length === 1) return this.state.pokemon[2][0]
    if(this.state.pokemon[2].length > 1) {
     for (let index = 0; index < this.state.pokemon[2].length; index++) {
       if(index === 0) phrase = this.state.pokemon[2][index]
       if(index !== 0) phrase = `${phrase} and ${this.state.pokemon[2][index]}`
     }
     return phrase
    }
  }

  render() {
    /* AREA DE TRABAJO
    Pueden usar desestructuracion o directamente modificar las variables this.pokemon por this.state...
    */

    return (
      <div style={{display:"flex"}}>
      <div className="container">
        <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={this.state.pokemon[0]} />
        <p id="name">{`${this.state.pokemon[0]} is a pokemon type ${this.getTypes()}`}</p>
      </div>
      <Pokedex updateParent={this.update} pokemons={this.state.pokemons} />
    </div>
    )
  }
}

