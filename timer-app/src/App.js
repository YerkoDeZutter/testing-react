import React, { Component } from 'react';

class App extends Component {

  state = {
    min: 10,
    sec: 0
  }

  startC = () => {
    this.interval = setInterval(() => {
      // const date = this.calculateCountdown(this.props.date);
      // date ? this.setState(date) : this.stop();
      if(this.state.sec === 0){
        let nextMin = this.state.min - 1
        let nextSec = 59
        this.setState({
          min: nextMin,
          sec: nextSec
        })
      } else {
        let nextMin = this.state.min
        let nextSec = this.state.sec - 1
        this.setState({
          min: nextMin,
          sec: nextSec
        })
      }

    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.min} : {this.state.sec}
        <br />
        <button onClick={this.startC}>start</button>
      </div>
    );
  }
}

export default App;
