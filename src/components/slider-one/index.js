import React, { Component } from 'react';
import Slider from './slider';
import ImgSlide from './img-slide';
import './style.scss';

const url = `https://stirearlankar.github.io/54729-kekstagram/photos/1.jpg`;
const numbers = [1, 2, 3, 4, 5, 6];
const reg = /\/1\./g;
const urls = numbers.map(num => url.replace(reg, `/${num}.`));
const array = urls.map(url => <ImgSlide url={url} />);

class Controller extends Component {
  state = {
    index: 0,
    isReady: true
  };

  componentWillMount() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', 'rgb(251, 219, 211)');
  }

  increaseIndex = () => {
    if (!this.state.isReady) return;
    const { index } = this.state;
    this.setState({index: index + 1, isReady: false})
  };

  decreaseIndex = () => {
    if (!this.state.isReady) return;
    const { index } = this.state;
    this.setState({index: index - 1, isReady: false})
  };

  beReady = () => {
    this.setState({isReady: true})
  };

  render() {
    return (
      <div className='slider1__wrapper'>
        <button
          type="button"
          className="slider1__btn slider1__btn--back"
          onClick={this.decreaseIndex}
        >
          Backward
        </button>

        <Slider index={this.state.index} components={array} onComplete={this.beReady}/>
        
        <button
          type="button"
          className="slider1__btn slider1__btn--frwd"
          onClick={this.increaseIndex}
        >
          Forward
        </button>
        
      </div>
    );
  }
}

export default Controller;
