import React, { Fragment } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'

import { useDrag } from '@use-gesture/react'
import clamp from 'lodash-es/clamp'

import path from './path'
import useStyles from './useStyles'

const constrains = (val: number, max: number) => {
  return val > 0 ? Math.min(val, max) : Math.max(val, -max)
}

// const circleQuarter = (Math.PI * 120) / 2

const transX = (x: number) => `translate3d(${x}px, 0, 0)`

// 180 * x / PI * R = path
const alpha = 180 / (120 * Math.PI)

const rotZ = (x: number) => `rotateZ(${alpha * x}deg)`

const scaleY = (x: number, i: number, width: number, amount: number) => {
  const wid = width / amount
  // [-w/2 ... + w/2]
  const positive = x + width / 2
  // [0 .... w]
  const itemValue = positive - i * wid
  // [0 ... w / n]

  const val = clamp(itemValue / wid, 0, 1)

  // return `scale3d(1, ${val}, 1)`
  return `translate3d(0, ${(1 - val) * 101}%, 0)`
}

export const Wheel = () => {
  const classes = useStyles()

  const [ref, { width }] = useMeasure({
    debounce: 100,
  })
  const [{ x }, set] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(
    ({ down, movement: [x], velocity: [vx], tap, elapsedTime }) => {
      if (!down && tap) {
        // set({ x: constrains(x + circleQuarter, width / 2) })
        return set({ x: constrains(x + elapsedTime, width / 2) })
      }
      set({
        x: down ? x : constrains(x + vx * 100, width / 2),
      })
    },
    {
      initial: () => [x.get(), 0],
      bounds: {
        right: width / 2,
        left: -width / 2,
      },
      rubberband: 0.4,
      axis: 'x',
      filterTaps: true,
    }
  )

  const renderItems = () =>
    Array.from({ length: Math.floor(width / 40) }, (_, i) => (
      <animated.li
        className={classes.item}
        style={{
          transform: x.to((x) => scaleY(x, i, width, Math.floor(width / 40))),
        }}
      />
    ))

  return (
    <Fragment>
      <animated.div
        className={classes.box}
        {...bind()}
        style={{
          transform: x.to(transX),
        }}
      >
        <animated.svg
          className={classes.svg}
          style={{
            transform: x.to(rotZ),
          }}
          viewBox='0 0 60 60'
        >
          <path fill='currentColor' d={path} />
        </animated.svg>
      </animated.div>
      <ul className={classes.list} ref={ref}>
        {renderItems()}
      </ul>
    </Fragment>
  )
}
