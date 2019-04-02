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

    scientist.id = this.state.scientists.length + 1;
    let scientists = [...this.state.scientists, scientist]
    this.setState({
      scientists: scientists
    })

  }

  deleteScientist = (scientist) => {
    
  }

  render() {
    return (
      <div className="App">

      <h1>My first React app</h1>
      <Scientists scientists={this.state.scientists} deleteScientists={this.deleteScientist} />
      <AddScientists addScientists={this.addScientist} />

      </div>
    );
  }
}

export default App;
