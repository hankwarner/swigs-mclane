import React, { Component } from 'react';
import './App.css';
import { DesktopNavBar, MobileNavBar } from './components/NavBar';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DesktopNavBar></DesktopNavBar>
        <MobileNavBar></MobileNavBar>
        <Landing></Landing>
      </div>
    );
  }
}

export default App;
