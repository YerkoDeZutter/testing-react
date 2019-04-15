import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home';
import Info from './components/info';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route exact path='/' component={Home} />
          <Route path='/:id' component={Info} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
