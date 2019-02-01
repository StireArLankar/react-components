import React, { Component } from 'react';
import Slider from './slider';
import Slide from './slide';
import './style.scss';

const numbers = [1, 2, 3, 4, 5];
const array = numbers.map(number => <Slide content={number} />);

class Controller extends Component {
  componentWillMount() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', 'rgb(217, 236, 199)');
  }

  render() {
    return(
      <Slider components={array} width={100}/>
    );
  }
}

export default Controller;