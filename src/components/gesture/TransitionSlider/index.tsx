//@ts-nocheck
import React, { useEffect } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import clamp from 'lodash-es/clamp'

import useStyles from './useStyles'
import imgs from './imgs'

export interface TransitionSliderProps {
  transform: (num: number) => string
  int: (x: number, count: number, i: number) => number
  // For consistence with more complex variants
  step?: number
  start?: number
}

const STEP = 100

const transform = (num: number) =>
  `translateZ(-200px) rotateY(${-90 + (num * 180) / STEP}deg )`

const int = (x: number, count: number, i: number) => {
  // Range of possible values
  // [0...max]
  const fullRange = STEP * count

  // Current x value bounded by full cycle
  // [0...val...max] or [-max...val...0]
  const boundedValue = x % fullRange

  // Needed for transforming negative value to positive
  // [-max...val...0] => [0...val...max]
  const offset = boundedValue > 0 ? 0 : fullRange
  const positiveValue = boundedValue + offset

  // Value normilized to [0...val...STEP] for each item
  const itemValue = positiveValue - STEP * i

  return clamp(itemValue, 0, STEP)
}

export const TransitionSlider = () => {
  // const { transform, int } = props

  const classes = useStyles()
  const [{ x }, setX] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(
    ({ offset: [x] }) => {
      setX({ x })
    },
    { domTarget: window, axis: 'x' }
  )

  useEffect(() => {
    bind()
  }, [bind])

  const renderImages = () =>
    imgs.map((img, index) => (
      <animated.li
        className={classes.container}
        style={{
          transform: x.interpolate((val) =>
            transform(int(val, imgs.length, index))
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
        {x.interpolate((val) => int(val, imgs.length, index).toFixed(0))}
      </animated.p>
    ))

  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>{renderImages()}</ul>
      <ul className={classes.values}>{renderValues()}</ul>
    </div>
  )
}
