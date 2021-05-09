import React, { useRef } from 'react'
import { animated, useSpring } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import useStyles from './useStyles'

export const Cancel = () => {
  const classes = useStyles()

  // const [check, setCheck] = useState(false)

  const check = useRef(false)

  const [{ x, backgroundColor }, set] = useSpring(() => ({
    x: 0,
    backgroundColor: '#91c9f9',
  }))

  const bind = useGesture({
    onDrag: ({ down, movement: [mx], cancel }) => {
      set({
        x: down ? mx : 0,
        immediate: down,
        backgroundColor: check.current ? '#ffb6c1' : '#91c9f9',
      })

      if (Math.abs(mx) > 100) {
        cancel && cancel()
        check.current = true
      }
    },
    onDragStart: () => (check.current = false),
  })

  return (
    <animated.div
      className={classes.box}
      {...bind()}
      style={{
        transform: x.to((val) => `translate3d(${val}px, 0, 0)`),
        backgroundColor,
      }}
    />
  )
}
