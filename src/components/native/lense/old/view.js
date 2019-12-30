import React, { Component } from 'react';

class View extends Component {
  render() {
    const { x, y, url, size, lenseSize } = this.props;
    const offset = size*size/lenseSize - size; 
    const style = {
      transform: `translate(-${x * offset}px, -${y * offset}px)`,
      width: `${size*size/lenseSize}px`,
      height: `${size*size/lenseSize}px`
    };
    return(
      <div className='lense__view'>
        <div className='lense__view-wrapper' style={style}>
          <img src={url} alt='' className='lense__view-img' />
        </div>
      </div>
    );
  }
}

export default View;
