import React, { Component } from 'react';
import Scientists from './scientists';

class App extends Component {

  state = {
    scientists: [
      { name: 'kyoma', age: 18, id: 1 },
      { name: 'hack', age: 18, id: 2 },
      { name: 'Cristina', age: 18, id: 3 }
    ]
  }

  render() {
    return (
      <div className="App">

      <h1>My first React app</h1>
      <Scientists scientists={this.state.scientists} />

      </div>
    );
  }
}

export default App;
