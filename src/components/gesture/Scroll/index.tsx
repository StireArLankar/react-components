import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useScroll } from '@use-gesture/react'

import { useStyles } from './useStyles'

export const Scroll = () => {
  const classes = useStyles()

  const [{ width }, set] = useSpring(() => ({ width: '0%' }))

  const height = document.documentElement.scrollHeight

  const bind = useScroll(
    ({ xy: [, y] }) => set({ width: (y / height) * 100 + '%' }),
    // FIXME
    { target: window }
  )

  // useEffect(() => {
  //   bind()
  // }, [bind])

  return (
    <div className={classes.wrapper}>
      <animated.div style={{ width }} className={classes.progress} />
    </div>
  )
}
