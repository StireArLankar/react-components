import React, { Component, Fragment } from 'react';
import './App.scss';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/home';
import CircleBar from './components/circle-bar';
import SliderOne from './components/slider-one';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <ul className="header__list">
            <li><Link to='/circle-bar'>Circle bar</Link></li>
            <li><Link to='/slider-one'>Slider One</Link></li>
          </ul>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/circle-bar' component={CircleBar} />
          <Route path='/slider-one' component={SliderOne} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
