import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.list = React.createRef();
  }

  state = {
    transform: 0,
  };

  moveIt = (move, up) => {
    const that = this;
    return function(evt) {
      if (evt.type === 'mousedown' && evt.buttons !== 1) return;
      if (evt.type === 'mousedown') evt.preventDefault();
      const list = that.list.current;
  
      const startX = evt.clientX || evt.touches[0].clientX;
      const width = list.offsetWidth;
      const length = list.children.length * width - list.parentNode.offsetWidth;
  
      let diff = 0
      list.style.transition = ``;
  
      function onMove(moveEvt) {
        const x = moveEvt.clientX || moveEvt.touches[0].clientX;
        diff = startX - x;
        const temp = that.state.transform + diff;
        list.style.transform =
          temp > length
            ? `translateX(-${length}px)`
            : `translateX(-${temp}px)`;
      }
  
      function onUp() {
        document.removeEventListener(move, onMove);
        document.removeEventListener(up, onUp);
        const temp = that.state.transform + diff;
        let transform = temp > length ? length : temp < 0 ? 0 : temp;
        const limit = Math.round(transform / width);
        transform = width * limit;
        list.style.transition = `transform 0.3s cubic-bezier(0.28, 0.82, 0.4, 0.82)`;
        list.style.transform = `translateX(-${transform}px)`;
        that.setState({transform: transform});
      }
  
      document.addEventListener(move, onMove);
      document.addEventListener(up, onUp);
    }
  }

  onTouchStart = this.moveIt('touchmove', 'touchend');
  onMouseDown = this.moveIt('mousemove', 'mouseup');

  render() {
    const { components, width } = this.props;

    return(
      <div className='slider2__window' onMouseDown={this.onMouseDown} onTouchStart={this.onTouchStart}>
        <ul className='slider2__list' ref={this.list} style={{width: width + '%'}}>
          {components.map((component, index) => <li key={index} className='slider2__item'>{component}</li>)}
        </ul>
      </div>
    );
  }
}

export default Slider;