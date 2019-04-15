import React, { Component } from 'react';
import axios from 'axios'

// http://dnd5eapi.co/api/classes/1
// https://pokeapi.co/api/v2/region/3

class Home extends Component {

  // stuf = {
  //   curPokemon: null
  // }

  state = {
    data: null
  }



  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/generation/3')
    .then(res => {
      this.setState({
        data: res.data
      })
      console.log(this.state.data);
    })
  }


  render() {

    const makeInfo = (pokemonBas) => {
      axios.get(pokemonBas.url).then(pokemon => {

        this.stuf = pokemon;
        // console.log(this.stuf);

      }).then(stuf=>{
        // console.log(this.stuf);
      })
      return this.stuf
      // console.log(this.stuf);
    }

    const pokeList = this.state.data !== null ? (
      this.state.data.pokemon_species.map(pokemonBas => {

        makeInfo(pokemonBas)

        return 'sup'

      })
    ) : ('no pokemon here')

    return(
      <div>
        <h1>HOME</h1>
        {pokeList}
      </div>
    )
  }

}

export default Home;
