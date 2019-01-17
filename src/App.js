import React, { Component, Fragment } from 'react';
import './App.scss';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/home';
import CircleBar from './components/circle-bar';
import Random from './components/random';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <ul className="header__list">
            <li><Link to='/circle-bar'>Circle bar</Link></li>
            <li><Link to='/random'>Random</Link></li>
          </ul>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/circle-bar' component={CircleBar} />
          <Route path='/random' component={Random} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
