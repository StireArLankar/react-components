import { useEffect, useRef, useState } from 'react'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'
import { BoxSliderProps } from './_types'
import imgs from './imgs'

const updateValue = (x: number, step: number, current: number) => {
  const offset = x % step
  if (offset > step / 2) {
    return current + x - offset + step
  } else if (offset < -step / 2) {
    return current + x - offset - step
  }
  return current + x - offset
}

export const BoxSliderAutoplay = (props: BoxSliderProps) => {
  const { rotate, int, step, start = 0 } = props

  const isAnimatingRef = useRef(false)

  const [{ x }, spring] = useSpring(() => ({
    x: start,
    onStart: () => (isAnimatingRef.current = true),
    onRest: () => (isAnimatingRef.current = false),
  }))

  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState(start)

  useDrag(
    ({ movement: [x], down }) => {
      if (down) {
        setIsDragging(true)
        spring.start({ x: offset + x })
      } else {
        setIsDragging(false)
        setOffset((prev) => updateValue(x, step, prev))
      }
    },
    { target: window, filterTaps: true }
  )

  useEffect(() => {
    spring.start({ x: offset })
  }, [offset, spring, isDragging])

  useEffect(() => {
    let timer: NodeJS.Timer
    if (!isDragging) {
      const timerHandler = () => {
        !isAnimatingRef.current && setOffset((prev) => prev - step)

        timer = setTimeout(timerHandler, 5000)
      }

      timer = setTimeout(timerHandler, 5000)
    }
    return () => clearTimeout(timer)
  }, [step, isDragging])

  useEffect(() => {
    setTimeout(() => (isAnimatingRef.current = false), 100)
  }, [])

  const renderImages = () =>
    imgs.map((img, index) => (
      <animated.li
        key={index}
        className={classes.container}
        style={{
          transform: x.to((val) => rotate(int(val, imgs.length, index))),
        }}
      >
        <animated.div
          className={classes.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      </animated.li>
    ))

  const renderValues = () =>
    imgs.map((_, index) => (
      <animated.p className={classes.value}>
        {x.to((val) => int(val, imgs.length, index).toFixed(0))}
      </animated.p>
    ))

  return (
    <div className={classes.wrapper}>
      <ul className={classes.stage}>{renderImages()}</ul>
      <ul className={classes.values}>{renderValues()}</ul>
    </div>
  )
}
