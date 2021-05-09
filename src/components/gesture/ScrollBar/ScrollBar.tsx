import React, { useState, useEffect, useRef, Fragment } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import useMeasure from 'react-use-measure'

import { useStyles } from './useStyles'

const getWheelBounds = (height: number, val: number) => ({
  top: height <= 0 ? 0 : -val,
  bottom: height <= 0 ? 0 : height - val,
})

const getDragBounds = (height: number, val: number) => ({
  top: height <= 0 ? 0 : -height + val,
  bottom: height <= 0 ? 0 : val,
})

const interpolateScroll = (content: number, container: number, val: number) =>
  `scaleY(${container / content}) translateY(${(val * 100) / container}%)`

export const ScrollBar = () => {
  const classes = useStyles()

  const [counter, setCounter] = useState(0)
  const increaseCounter = () => setCounter((prev) => prev + 1)

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
      setImmediate(() => (isTap.current = true))
    }
  }

  const isTap = useRef(true)

  const bind = useGesture(
    {
      onDrag: ({ movement: [, y], down, tap }) => {
        if (!tap) {
          isTap.current = false
        }
        handler(-y, down)
      },
      onWheel: ({ movement: [, y], wheeling }) => handler(y, wheeling),
      onWheelEnd: () => setActing(false),
      onWheelStart: () => setActing(true),
      onDragEnd: () => setActing(false),
      onDragStart: () => setActing(true),
      onClickCapture: (evt) => {
        if (!isTap.current) {
          evt.stopPropagation()
          evt.nativeEvent.preventDefault()
          evt.nativeEvent.stopPropagation()
        }
      },
    },
    {
      wheel: {
        bounds: getWheelBounds(height, val),
        rubberband: 0.1,
      },
      drag: {
        rubberband: height > 0 ? 0.3 : 0.15,
        bounds: getDragBounds(height, val),
        filterTaps: true,
      },
    }
  )

  const renderScrollBar = () => (
    <div className={classes.progressWrapper}>
      <animated.div
        className={classes.progress}
        style={{
          transform: y.to((val) =>
            interpolateScroll(contentHeight, containerHeight, val)
          ),
        }}
      />
    </div>
  )

  const renderBlock = () => (
    <div
      onClick={increaseCounter}
      style={{ height: 100, width: 100, background: 'red', marginLeft: 'auto' }}
    />
  )

  const renderSpacer = () => <div style={{ height: 100, width: 100 }} />

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
          paddingRight: height > 0 ? 9 : 0,
          transform: y.to((val) => `translate(0, ${-val}px)`),
        }}
      >
        {renderItems(5)}
      </animated.div>
      <div className={classes.counter}>{counter}</div>
      {height > 0 && renderScrollBar()}
    </div>
  )
}
