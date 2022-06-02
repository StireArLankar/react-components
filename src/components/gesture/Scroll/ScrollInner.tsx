import useMeasure from 'react-use-measure'

import { useSpring, animated } from '@react-spring/web'
import { useScroll } from '@use-gesture/react'

import classes from './_classes.css'

export const ScrollInner = () => {
  const [{ width }, spring] = useSpring(() => ({ width: '0%' }))

  const [contentRef, { height: contentHeight }] = useMeasure()
  const [containerRef, { height: containerHeight }] = useMeasure()

  const height = contentHeight - containerHeight

  const bind = useScroll(({ xy: [, y] }) =>
    spring.start({ width: (y / height) * 100 + '%' })
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
