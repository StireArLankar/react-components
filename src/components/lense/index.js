import React, { Component, Fragment } from 'react';
import './style.scss';
import Controller from './controller';

class Container extends Component {
  state = {
    size: 200,
    lenseSize: 50,
    url: 'https://stirearlankar.github.io/54729-kekstagram/photos/14.jpg'
  };

  componentWillMount() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', 'rgb(197, 241, 246)');
  }

  onSizeChange = (evt) => {
    const value = evt.target.value;
    if (isNaN(+value)) return;
    this.setState({size: value});
  }

  onLenseSizeChange = (evt) => {
    const value = evt.target.value;
    if (isNaN(+value)) return;
    this.setState({lenseSize: value});
  }

  render() {
    const { size, lenseSize, url } = this.state;
    return (
      <Fragment>
        <div className='lense'>
          <Controller size={size} lenseSize={lenseSize} url={url}/>
        </div>
        <div className='lense__controls'>
          <label className='lense__label'>
            <span>Размер изображений</span>
            <input type='text' value={size} onChange={this.onSizeChange} /> 
          </label>
          <label className='lense__label'>
            <span>Размер линзы</span>
            <input type='text' value={lenseSize} onChange={this.onLenseSizeChange} /> 
          </label>
        </div>
      </Fragment>
    );
  }
}

export default Container;