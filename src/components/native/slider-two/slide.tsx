import React from 'react'

import style from './slider.module.scss'

export interface SlideProps {
  title: string
  content: string
}

const Slide = (props: SlideProps) => {
  const { content, title } = props

  return (
    <div className={style.slide}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Slide
