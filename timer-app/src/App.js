import React, { Component } from 'react';

class App extends Component {

  state = {
    min: 10,
    sec: 0,
    button: 'play'
  }

  startC = () => {
    this.interval = setInterval(() => {

      if(this.state.sec === 0){
        let nextMin = this.state.min - 1
        let nextSec = 59
        this.setState({
          min: nextMin,
          sec: nextSec,
          button: 'stop'
        })
      } else {
        let nextMin = this.state.min
        let nextSec = this.state.sec - 1
        this.setState({
          min: nextMin,
          sec: nextSec,
          button: 'stop'
        })
      }

    }, 1000);
  }

  stopC = () => {
    clearInterval(this.interval);
    this.setState({
      min: 10,
      sec: 0,
      button: 'play'
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.min} : {this.state.sec}
        <br />
        <button onClick={this.state.button === 'play' ? this.startC : this.stopC}>start</button>
      </div>
    );
  }
}

export default App;
