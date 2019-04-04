import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
