import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import useStyles from './useStyles'

export const Swipe = () => {
  const classes = useStyles()

  const [position, setPosition] = useState(0)

  const { x } = useSpring({ x: position * 200 })

  const bind = useDrag(({ down, vxvy: [vx], cancel }) => {
    // const bind = useDrag(({ swipe: [swipeX] }) => {
    // setPosition((p) => Math.min(Math.max(-1, p + swipeX), 1))

    // Workaround as swipe will appear in next version
    if (Math.abs(vx) > 0.5 && down) {
      setPosition((p) => Math.min(Math.max(-1, p + Math.sign(vx)), 1))
      cancel && cancel()
    }
  })

  return (
    <animated.div
      className={classes.box}
      {...bind()}
      style={{
        transform: x.interpolate((val) => `translate3d(${val}px, 0, 0)`),
      }}
    />
  )
}
