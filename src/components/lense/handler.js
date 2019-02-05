import React, { Component } from 'react';

class Handler extends Component {
  constructor(props) {
    super(props);
    this.handler = React.createRef();
  }
 
  onMouseDown = (evt) => {
    evt.preventDefault();
    const handler = this.handler.current;
    const { x: handlerX, y: handlerY} = handler.getBoundingClientRect();
    const { clientHeight: height, clientWidth: width } = handler;
    
    let x = getX(evt);
    let y = getY(evt);

    const onMouseMove = (evt) => {
      x = getX(evt);
      y = getY(evt);
      
      const xCheck = x >= 0 ? x <= 1 ? x : 1 : 0;
      const yCheck = y >= 0 ? y <= 1 ? y : 1 : 0;

      this.props.changeCoords(xCheck, yCheck);
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function getX(evt) {
      return (evt.clientX - handlerX) / width;
    }

    function getY(evt) {
      return (evt.clientY - handlerY) / height;
    }
  }

  render() {
    const { url, x, y } = this.props;
    const style = {
      top: `${y * 100}%`,
      left: `${x * 100}%`
    };

    return(
      <div className='lense__handler' onMouseDown={this.onMouseDown} ref={this.handler}>
        <img src={url} alt='' className='lense__handler-img' />
        <div className='lense__border'>
          <div className='lense__lense' style={style}></div>
        </div>
      </div>
    );
  }
}

export default Handler;
