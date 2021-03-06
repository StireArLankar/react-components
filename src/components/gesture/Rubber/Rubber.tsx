//@ts-nocheck
import React, { Fragment } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import useStyles from './useStyles'
import { ReactComponent as Filter } from './filter.svg'

const trans = (y: number, c: number) =>
  `translateX(-50%) rotate(45deg) skew(${y * c}deg, ${y * c}deg)`

const dragOptions = {
  bounds: {
    top: -65,
    bottom: 50,
  },
}

export const Rubber = () => {
  const [{ y }, set] = useSpring(() => ({ y: -20 }))

  const classes = useStyles()

  const bind = useDrag(({ movement: [, y], down }) => {
    set({ y: down ? -y - 20 : -20 })
  }, dragOptions)

  return (
    <Fragment>
      <Filter style={{ display: 'none' }} />
      <animated.div
        className={classes.wrapper}
        style={{
          bottom: y.interpolate((y) => y * 0.5 + 10),
        }}
      >
        <animated.div
          className={classes.box}
          style={{
            transform: y.interpolate((y) => trans(y, 0.5)),
          }}
        />
        <animated.div
          className={classes.box}
          style={{
            transform: y.interpolate((y) => trans(y, 0.4)),
          }}
        />
        <animated.div
          className={classes.box}
          style={{
            transform: y.interpolate((y) => trans(y, 0.3)),
          }}
          {...bind()}
        />
        <animated.div
          className={classes.planc}
          style={{
            height: y.interpolate((y) => `${100 - y * 0.1}px`),
          }}
        />
      </animated.div>
    </Fragment>
  )
}
