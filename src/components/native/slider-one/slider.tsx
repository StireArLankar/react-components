import React, { useEffect, useRef, Fragment } from 'react'
import cn from 'classnames'
import { incLastElement, decFirstElement } from './utils'

import style from './slider.module.scss'

interface SliderProps {
  components: JSX.Element[]
  onComplete: () => void
  index: number
}

const Slider = (props: SliderProps) => {
  const { components, onComplete, index } = props
  const temp = useRef(0)
  const listRef = useRef([components.length - 1, 0, 1, 2])
  const list = listRef.current

  const onTransitionEnd = () => onComplete()

  useEffect(() => {
    const len = components.length

    const newList =
      index > temp.current
        ? incLastElement(listRef.current, len, listRef.current.length)
        : decFirstElement(listRef.current, len, listRef.current.length)

    listRef.current = newList
    temp.current = index
  }, [index, components.length])

  const renderSlides = () => {
    const array = list.map((index) => components[index])
    return array.map((el, index) => (
      <li key={list[index]} className={cn(style.box, style[`box--${index}`])}>
        {el}
      </li>
    ))
  }

  return (
    <Fragment>
      <div className={style.stage}>
        <ul
          className={style.spinner}
          style={{ transform: `translateZ(-150px) rotateY(${-90 * index}deg)` }}
          onTransitionEnd={onTransitionEnd}
        >
          {renderSlides()}
        </ul>
      </div>
    </Fragment>
  )
}

export default Slider
