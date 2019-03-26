import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Settings from './pages/Settings';
import Nav from './components/layout/Nav';
import Robots from './components/robots/Robots';
import Users from './pages/Users';
import Redux from './pages/Redux';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Featured} />
            <Route path="/archives" component={Archives} />
            <Route path="/settings" component={Settings} />
            <Route path="/robots" component={Robots} />
            <Route path="/users" component={Users} />
            <Route path="/redux" component={Redux} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
