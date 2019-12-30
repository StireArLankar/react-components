import React, { Component } from 'react';
import View from './view';
import Handler from './handler';

class Controller extends Component {
  state = {
    x: 0,
    y: 0,
  };

  componentWillMount() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', 'rgb(197, 241, 246)');
  }

  changeCoords = (x, y) => {
    this.setState({x, y})
  }

  render() {
    const { x, y } = this.state;
    const { size, lenseSize, url } = this.props;
    const style = {
      '--size': `${size}px`,
      '--lense-size': `${lenseSize}px`
    };
    return (
      <div className='lense__wrapper' style={style}>
        <Handler changeCoords={this.changeCoords} x={x} y={y} url={url}/>
        <View x={x} y={y} url={url} size={size} lenseSize={lenseSize}/>
      </div>
    );
  }
}

export default Controller;