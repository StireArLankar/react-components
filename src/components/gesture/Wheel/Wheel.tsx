import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import useStyles from './useStyles'

import path from './path'

const constrains = (val: number, max: number) => {
  return val > 0 ? Math.min(val, max) : Math.max(val, -max)
}

const getMax = () => window.innerWidth / 2 - 200

const circleQuarter = (Math.PI * 120) / 2

const transX = (x: number) => `translate3d(${x}px, 0, 0)`

// 180 * x / PI * R = path
const alpha = 180 / (120 * Math.PI)

const rotZ = (x: number) => `rotateZ(${alpha * x}deg)`

export const Wheel = () => {
  const classes = useStyles()

  const [{ x }, set] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(
    ({ down, movement: [x], vxvy: [vx], tap }) => {
      if (!down && tap) {
        set({ x: x + circleQuarter })
        return
      }
      set({
        x: down ? x : constrains(x + vx * 100, getMax()),
      })
    },
    {
      initial: () => [x.getValue(), 0],
      bounds: {
        right: getMax(),
        left: -getMax(),
      },
      rubberband: 0.4,
      axis: 'x',
      filterTaps: true,
    }
  )

  return (
    <div>
      <animated.div
        className={classes.box}
        {...bind()}
        style={{
          transform: x.interpolate(transX),
        }}
      >
        <animated.svg
          className={classes.svg}
          style={{
            transform: x.interpolate(rotZ),
          }}
          viewBox='0 0 60 60'
        >
          <path fill='currentColor' d={path} />
        </animated.svg>
      </animated.div>
    </div>
  )
}
