//@ts-nocheck
import React, { useEffect, useRef } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import clamp from 'lodash-es/clamp'

import useStyles from './useStyles'
import imgs from './imgs'

const STEP = 100
const WIDTH = 200

// range: [-100, 200]
const trans = (num: number) =>
  `translate3d(${(num * WIDTH) / STEP}px, 0, 0) scale(${
    1.2 - (Math.abs(-50 + num) * 4) / (150 * 10)
  })`

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

  if (i === 0 && positiveValue > fullRange - STEP) {
    // Make first item move like he is startig from STEP * -1 on big values
    return positiveValue - fullRange
  }

  if (i === count - 1 && positiveValue < STEP) {
    // Make last item move like he is startig from STEP * 2 on low values
    return positiveValue + STEP
  }

  return clamp(itemValue, STEP * -1, STEP * 2)
}

export interface ComplexSliderProps {
  start?: number
  overflow?: boolean
  hideValues?: boolean
}

export const ComplexSlider = (props: ComplexSliderProps) => {
  const { start = 0, overflow, hideValues } = props

  const classes = useStyles()
  const [{ x }, setX] = useSpring(() => ({
    x: start,
    config: { mass: 5, tension: 170, friction: 80 },
  }))

  // Ref for memoizing value between drags
  const dragOffset = useRef(start)

  const bind = useDrag(
    ({ movement: [x], down, vxvy: [vx] }) => {
      if (down) {
        setX({
          x: dragOffset.current + x,
        })
      } else {
        dragOffset.current += x + vx * 200
        // dragOffset.current += x
        setX({
          x: dragOffset.current,
        })
      }
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
            trans(int(val, imgs.length, index))
          ),
        }}
      >
        <div
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
    <div
      className={classes.wrapperBig}
      style={{ overflow: overflow ? 'unset' : 'hidden' }}
    >
      <ul className={classes.list}>{renderImages()}</ul>
      {!hideValues && <ul className={classes.values}>{renderValues()}</ul>}
    </div>
  )
}
