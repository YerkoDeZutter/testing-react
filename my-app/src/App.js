import React, { Component } from 'react';
import Scientists from './scientists';
import AddScientists from './addScientists';

class App extends Component {

  state = {
    scientists: [
      { name: 'kyoma', age: 18, id: 1 },
      { name: 'hack', age: 18, id: 2 },
      { name: 'Cristina', age: 18, id: 3 }
    ]
  }

  addScientist = (scientist) => {

    scientist.id = this.state.scientists[this.state.scientists.length - 1].id + 1;
    let scientists = [...this.state.scientists, scientist]
    this.setState({
      scientists: scientists
    })

  }

  deleteScientist = (id) => {

    let scientists = this.state.scientists.filter(scientist => {
      return scientist.id !== id ? true : false
    })
    this.setState({
      scientists: scientists
    })

  }

  render() {
    return (
      <div className="App">

      <h1>My first React app</h1>
      <Scientists scientists={this.state.scientists} deleteScientist={this.deleteScientist} />
      <AddScientists addScientists={this.addScientist} />

      </div>
    );
  }
}

export default App;
