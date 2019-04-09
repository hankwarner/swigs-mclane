import React, { Component } from 'react';
import './App.css';

// React Router
import { Route, Switch } from "react-router-dom";
import DesktopNavBar from './components/NavBar';
import { MobileNavigationBar } from './components/NavBar';

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
          <MobileNavigationBar />
          <div className="background">
            <div className="background-overlay"></div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/home" component={Landing} />
              <Route path="/music" component={Music} />
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
