import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DesktopNavBar, MobileNavBar } from './components/NavBar';
import Landing from './components/Landing';
import Music from './components/Music';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DesktopNavBar />
        <MobileNavBar />
        <Router>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Landing} />
          <Route path="/music" component={Music} />
        </Router>
      </div>
    );
  }
}

export default App;
