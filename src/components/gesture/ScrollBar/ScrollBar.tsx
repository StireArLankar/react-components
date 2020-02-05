import React, { PropsWithChildren, useState, useEffect, Fragment } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

import { useStyles } from './useStyles'
import useMeasure from 'react-use-measure'

const getWheelBounds = (content: number, container: number, val: number) => ({
  bottom: content <= container ? 0 : content - container - val,
  top: content <= container ? 0 : -val,
})

const getDragBounds = (content: number, container: number, val: number) => ({
  top: content <= container ? 0 : -content + container + val,
  bottom: content <= container ? 0 : val,
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

  const handler = (y: number, check: boolean) => {
    if (check) {
      set({ y: val + y })
    } else {
      setVal((prev) => prev + y)
    }
  }

  const bind = useGesture(
    {
      onDrag: ({ movement: [, y], down }) => handler(-y, down),
      onWheel: ({ movement: [, y], wheeling }) => handler(y, wheeling),
      onWheelEnd: () => setActing(false),
      onWheelStart: () => setActing(true),
      onDragEnd: () => setActing(false),
      onDragStart: () => setActing(true),
    },
    {
      wheel: {
        bounds: getWheelBounds(contentHeight, containerHeight, val),
        rubberband: 0.1,
      },
      drag: {
        rubberband: height > 0 ? 0.3 : 0.15,
        bounds: getDragBounds(contentHeight, containerHeight, val),
        filterTaps: true,
      },
    }
  )

  const renderBlock = () => (
    <div style={{ height: 100, width: 100, background: 'red' }} />
  )

  const renderSpacer = () => (
    <div style={{ height: 100, margin: '20px 0', width: 100 }} />
  )

  const renderItems = (amount: number) => (
    <Fragment>
      {renderBlock()}
      {Array.from({ length: amount - 1 }, () => '').map((_, index) => (
        <Fragment key={index}>
          {renderSpacer()}
          {renderBlock()}
        </Fragment>
      ))}
    </Fragment>
  )

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
        {!children && renderItems(5)}
      </animated.div>
    </div>
  )
}
