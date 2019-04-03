import React, { Component } from 'react';

class App extends Component {

  state = {

  }

  setC = (e) => {

  }

  startC = (e) => {

  }

  stopC = (e) => {

  }

  render() {
    return (
      <div className="App">

        <h1>Set timer and countdown</h1>
        <br />
        <input type={this.state.button === 'play' ? "number" : "hidden"} min='1' max='99' name="setMin" id="setMin" value={this.state.min} onChange={this.setC} />
        <br />
        <h1>{this.state.min.toString().length === 1 ? '0' + this.state.min : this.state.min} : {this.state.sec.toString().length === 1 ? '0' + this.state.sec : this.state.sec}</h1>
        <br />
        <button onClick={this.state.button === 'play' ? this.startC : this.stopC}>{this.state.button}</button>

      </div>
    );
  }
}

export default App;
