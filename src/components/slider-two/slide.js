import React from 'react'

import style from './slider.module.scss'

const Slide = (props) => {
  return (
    <div className={style.slide}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

export default Slide
