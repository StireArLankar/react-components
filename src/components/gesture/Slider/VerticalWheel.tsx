//@ts-nocheck
import React from 'react'
import { useWheel } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'

import useStyles from './useStyles'
import imgs from './imgs'

const wheel = (y: number, height: number, count: number) => {
  const start = y % (height * count)
  const offset = -height * (y < 0 ? count + 1 : 1)
  return `translateY(${offset - start}px)`
}

export const VerticalWheel = () => {
  const classes = useStyles()
  const [ref, { height }] = useMeasure()
  const [{ wheelY }, setWheel] = useSpring(() => ({ wheelY: 0 }))
  const bind = useWheel(({ offset: [, y] }) => setWheel({ wheelY: y }))

  return (
    <div className={classes.wrapper}>
      <animated.div
        {...bind()}
        ref={ref}
        className={classes.inner}
        style={{
          transform: wheelY.interpolate((val) => wheel(val, height, 5)),
        }}
      >
        {imgs.map((img, i) => (
          <div
            key={i}
            className={classes.img}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </animated.div>
    </div>
  )
}
