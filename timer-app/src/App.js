import React, { Component } from 'react';

class App extends Component {

  state = {
    min: 0,
    sec: 0,
    button: 'play'
  }

  setC = (e) => {
    this.setState({
      min: e.target.value,
      sec: 0,
      button: 'play'
    })
  }

  startC = () => {
    this.interval = setInterval(() => {

      if(this.state.sec === 0 && this.state.min !== 0){
        let nextMin = this.state.min - 1
        let nextSec = 59
        this.setState({
          min: nextMin,
          sec: nextSec,
          button: 'stop'
        })
      } else if (this.state.sec === 0 && this.state.min === 0) {

        this.stopC();

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
      min: 0,
      sec: 0,
      button: 'play'
    })

  }

  render() {
    return (
      <div className="App">
        <input type="number" min='0' max='99' name="setMin" id="setMin" value={this.state.min} onChange={this.setC} />
        <br />
        {this.state.min.toString().length === 1 ? '0' + this.state.min : this.state.min} : {this.state.sec.toString().length === 1 ? '0' + this.state.sec : this.state.sec}
        <br />
        <button onClick={this.state.button === 'play' ? this.startC : this.stopC}>{this.state.button}</button>
      </div>
    );
  }
}

export default App;
