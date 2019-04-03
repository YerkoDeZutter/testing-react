import React, { Component } from 'react';

class App extends Component {

  state = {
    min: 1,
    sec: 0,
    button: 'play'
  }

  setC = (e) => {
    this.setState({
      min: e.target.value
    })
  }

  tick = (e) =>{

    let minNow = Math.floor(this.secondsRemaining / 60);
    let secNow = this.secondsRemaining - (minNow * 60);
    console.log();
    this.setState({
      min: minNow,
      sec: secNow
    })

    this.secondsRemaining--
  }

  startC = (e) => {

    this.setState({
      button: 'stop'
    })

    this.interval = setInterval(this.tick, 1000)
    let time = this.state.min;
    this.secondsRemaining = time * 60 - 1;
  }

  stopC = (e) => {
    clearInterval(this.interval);
    this.setState({
      min: 1,
      sec: 0,
      button: 'play'
    })
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
