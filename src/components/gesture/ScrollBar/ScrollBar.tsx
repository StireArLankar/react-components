import React, { PropsWithChildren, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

import { useStyles } from './useStyles'
import useMeasure from 'react-use-measure'

const getBounds = (content: number, container: number, val: number) => ({
  bottom: content <= container ? 100 : content - container - val,
  top: content <= container ? -100 : -val,
})

export const ScrollBar = (props: PropsWithChildren<{}>) => {
  const { children } = props

  const classes = useStyles()

  const [contentRef, { height: contentHeight }] = useMeasure()
  const [containerRef, { height: containerHeight }] = useMeasure()

  const height = contentHeight - containerHeight

  const [val, setVal] = useState(0)
  const [acting, setActing] = useState(false)

  const [{ y }, set] = useSpring(() => ({ y: 0 }))

  useEffect(() => {
    set({ y: val })
  }, [val, set, acting])

  const bounds = getBounds(contentHeight, containerHeight, val)

  const bind = useGesture(
    {
      // onDrag: ({ movement: [, y], down }) => {
      //   if (down) {
      //     set({ y: val + y })
      //   } else {
      //     setVal((prev) => prev + y)
      //   }
      // },
      onWheel: ({ movement: [, y], wheeling }) => {
        if (wheeling) {
          setActing(true)
          set({ y: val + y })
        } else {
          setActing(false)
          setVal((prev) => prev + y)
        }
      },
    },
    {
      eventOptions: { passive: true },
      // drag: {
      //   bounds: getBounds(contentHeight, containerHeight, val),
      //   rubberband: 0.2,
      //   filterTaps: true,
      // },
      wheel: {
        rubberband: 0.2,
        bounds,
      },
    }
  )

  const renderScrollBar = () => <animated.div className={classes.progress} />

  return (
    <div className={classes.container} {...bind()} ref={containerRef}>
      <animated.div
        className={classes.content}
        ref={contentRef}
        style={{
          transform: y.interpolate((val) => `translate(0, ${-val}px)`),
        }}
      >
        {children}
        <div style={{ height: 100, width: 100, background: 'red' }} />
        <div style={{ height: 100, margin: '20px 0', width: 100 }} />
        <div style={{ height: 100, width: 100, background: 'red' }} />
        <div style={{ height: 100, margin: '20px 0', width: 100 }} />
        <div style={{ height: 100, width: 100, background: 'red' }} />
        <div style={{ height: 100, margin: '20px 0', width: 100 }} />
        <div style={{ height: 100, width: 100, background: 'red' }} />
      </animated.div>
      {height > 0 && renderScrollBar()}
    </div>
  )
}
