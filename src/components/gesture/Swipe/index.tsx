import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import { useDrag } from '@use-gesture/react'
import clsx from 'clsx'

import useStyles from './useStyles'

const OFFSET = 200

export const Swipe = () => {
  const classes = useStyles()

  const [position, setPosition] = useState(0)

  const { x } = useSpring({ x: position * OFFSET })

  const renderSlots = () =>
    [-1, 0, 1].map((pos) => (
      <div
        key={pos}
        className={clsx(classes.background, position === pos && classes.active)}
        style={{ transform: `translate(${OFFSET * pos}px) scale(1.1)` }}
      />
    ))

  const bind = useDrag(({ down, velocity: [vx], cancel }) => {
    // const bind = useDrag(({ swipe: [swipeX] }) => {
    // setPosition((p) => Math.min(Math.max(-1, p + swipeX), 1))

    // Workaround as swipe will appear in next version
    if (Math.abs(vx) > 0.5 && down) {
      setPosition((p) => Math.min(Math.max(-1, p + Math.sign(vx)), 1))
      cancel && cancel()
    }
  })

  return (
    <div className={classes.wrapper}>
      {renderSlots()}
      <animated.div
        className={classes.box}
        {...bind()}
        style={{
          transform: x.to((val) => `translate3d(${val}px, 0, 0)`),
        }}
      />
    </div>
  )
}
