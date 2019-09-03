import React from 'react'

import style from './slider.module.scss'

const ImgSlide = (props) => {
  return(
    <>
      <div className={style.imgWrapper}>
        <img src={props.url} alt='' className={style.img} />
      </div>
      <p className={style.text}>{props.text}</p>
    </>
  )
}

export default ImgSlide
