import React from 'react'
import useMeasure from 'react-use-measure'

import { useSpring, animated } from '@react-spring/web'
import { useScroll } from '@use-gesture/react'

import { useStyles } from './useStyles'

export const ScrollInner = () => {
  const classes = useStyles()

  const [{ width }, set] = useSpring(() => ({ width: '0%' }))

  const [contentRef, { height: contentHeight }] = useMeasure()
  const [containerRef, { height: containerHeight }] = useMeasure()

  const height = contentHeight - containerHeight

  const bind = useScroll(({ xy: [, y] }) =>
    set({ width: (y / height) * 100 + '%' })
  )

  return (
    <div className={classes.scrollArea} {...bind()} ref={containerRef}>
      <div className={classes.scrollInner} ref={contentRef} />
      <div className={classes.wrapper}>
        <animated.div style={{ width }} className={classes.progress} />
      </div>
    </div>
  )
}
