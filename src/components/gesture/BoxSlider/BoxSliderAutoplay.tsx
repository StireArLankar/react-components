import React, { useEffect, useRef, useState } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'

import useStyles from './useStyles'
import imgs from './imgs'

export interface BoxSliderAutoplayProps {
  rotate: (num: number) => string
  int: (x: number, count: number, i: number) => number
  step: number
  start?: number
}

const updateValue = (x: number, step: number, current: number) => {
  const offset = x % step
  if (offset > step / 2) {
    return current + x - offset + step
  } else if (offset < -step / 2) {
    return current + x - offset - step
  }
  return current + x - offset
}

export const BoxSliderAutoplay = (props: BoxSliderAutoplayProps) => {
  const { rotate, int, step, start = 0 } = props

  const isAnimatingRef = useRef(false)

  const classes = useStyles()

  const [{ x }, setX] = useSpring(() => ({
    x: start,
    onStart: (): any => (isAnimatingRef.current = true),
    onRest: () => (isAnimatingRef.current = false),
  }))

  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState(start)

  const bind = useDrag(
    ({ movement: [x], down }) => {
      if (down) {
        setIsDragging(true)
        setX({ x: offset + x })
      } else {
        setIsDragging(false)
        setOffset((prev) => updateValue(x, step, prev))
      }
    },
    { domTarget: window, filterTaps: true }
  )

  useEffect(() => {
    setX({ x: offset })
  }, [offset, setX, isDragging])

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
  }, [step, setX, isDragging])

  useEffect(() => {
    setTimeout(() => (isAnimatingRef.current = false), 100)
  }, [])

  useEffect(() => {
    bind()
  }, [bind])

  const renderImages = () =>
    imgs.map((img, index) => (
      <animated.li
        key={index}
        className={classes.container}
        style={{
          transform: x.interpolate((val) =>
            //@ts-ignore
            rotate(int(val, imgs.length, index))
          ),
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
        {/* @ts-ignore */}
        {x.interpolate((val) => int(val, imgs.length, index).toFixed(0))}
      </animated.p>
    ))

  return (
    <div className={classes.wrapper}>
      <ul className={classes.stage}>{renderImages()}</ul>
      <ul className={classes.values}>{renderValues()}</ul>
    </div>
  )
}
