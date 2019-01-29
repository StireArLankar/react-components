import React, { Fragment } from 'react';

const ImgSlide = ({url}) => {
  return(
    <Fragment>
      <div className='slider1__img-wrapper'>
        <img src={url} alt='' className='slider1__img'/>
      </div>
      <p className='slider1__text'>{url}</p>
    </Fragment>
  );
};

export default ImgSlide;