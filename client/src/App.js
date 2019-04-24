import React, { Component } from 'react';
import './css/App.css';
import './css/magnific.css';

// React Router
import { Route, Switch } from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import DesktopNavBar from './components/NavBar';
import { MobileNavigationBar } from './components/NavBar';
import Footer from './components/Footer';
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
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/home" component={Landing} />
              <Route path="/music" component={Music} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
