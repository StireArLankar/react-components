import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { incLastElement, decFirstElement } from './utils'

import style from './slider.module.scss'

const Slider = (props) => {
  const [temp, setTemp] = useState(0)
  const [list, setList] = useState([props.components.length - 1, 0, 1, 2])
  
  const onTransitionEnd = () => props.onComplete()

  useEffect(() => {
    const len = props.components.length

    const newList = props.index > temp
      ? incLastElement(list, len, list.length)
      : decFirstElement(list, len, list.length)
    
    setList(newList)
    setTemp(props.index)
  }, [props.index])

  const renderSlides = () => {
    const array = list.map(index => props.components[index])
    return array.map((el, index) => (
      <li key={list[index]} className={cn(style.box, style[`box--${index}`])}>
        {el}
      </li>
    ))
  }

  return (
    <>
      <div className={style.stage}>
        <ul
          className={style.spinner}
          style={{transform: `translateZ(-150px) rotateY(${-90*props.index}deg)`}}
          onTransitionEnd={onTransitionEnd}
        >
          {renderSlides()}
        </ul>
      </div>
    </>
  )
}

export default Slider
