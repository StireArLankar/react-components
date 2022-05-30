import React from 'react'
import { useSpring, animated } from '@react-spring/web'

import { useDrag } from '@use-gesture/react'

import useStyles from './useStyles'

const trans = (...p: number[]) => `translate3d(${p[0]}px, ${p[1]}px, 0)`

export const PullRelease = () => {
  const classes = useStyles()

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ xy: down ? [mx, my] : [0, 0] })
  })

  return (
    <animated.div
      className={classes.box}
      {...bind()}
      style={{
        transform: xy.to(trans as any),
      }}
    />
  )
}
