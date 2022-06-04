import { useState } from 'react'

import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'

const OFFSET = 200

// FIXME
export const Swipe = () => {
  const [position, setPosition] = useState(0)

  const animStyle = useSpring({ x: position * OFFSET })

  const renderSlots = () =>
    [-1, 0, 1].map((pos) => (
      <div
        key={pos}
        className={classes.background({ active: position === pos })}
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
      <animated.div className={classes.box} {...bind()} style={animStyle} />
    </div>
  )
}
