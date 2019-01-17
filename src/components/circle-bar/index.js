import React, { Component } from 'react';
import './style.scss';
import Ring from './progress-ring';
import Result from './result';

class CircleBar extends Component {
  state = {
    progress: 100
  };

  onRingClick = (value) => {
    this.setState({progress: value});
  };

  render() {
    return (
      <div className='circle-bar'>
        <h1>CircleBar</h1>
        <Ring radius={200} stroke={30} progress={this.state.progress} onRingClick={this.onRingClick}>
          <Result progress={this.state.progress} />
        </Ring>
      </div>
    );
  }
}


export default CircleBar;
