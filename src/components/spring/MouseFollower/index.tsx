import React, { Fragment } from 'react'
import { useTrail, animated } from '@react-spring/web'

import { useStyles } from './useStyles'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`
const color = (i: number) => `hsl(${i * 100}, 60%, 60%)`

export interface MouseFollowerProps {
  amount?: number
}

export const MouseFollower = (props: MouseFollowerProps) => {
  const { amount = 3 } = props

  const [trail, set] = useTrail(amount, () => ({
    xy: [0, 0],
    config: (i) => (Number(i) === 0 ? fast : slow),
  }))

  const classes = useStyles()

  return (
    <Fragment>
      <svg className={classes.svg}>
        <filter id='goo'>
          <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='30' />
          <feColorMatrix
            in='blur'
            values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7'
          />
        </filter>
      </svg>
      <div
        className={classes.wrapper}
        onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] } as any)}
      >
        {trail.map((props, index) => (
          <animated.div
            className={classes.goo}
            key={index}
            style={{
              transform: (props as any).xy.to(trans),
              backgroundColor: color(index),
            }}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default MouseFollower
