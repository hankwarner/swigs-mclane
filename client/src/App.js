import React, { Component } from 'react';
import './App.css';

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DesktopNavBar, MobileNavBar } from './components/NavBar';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Landing from './components/Landing';
import Music from './components/Music';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DesktopNavBar />
          <MobileNavBar />
          <Router>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Landing} />
            <Route path="/music" component={Music} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
