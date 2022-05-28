import { useState, useEffect, useRef, Fragment, memo } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'

import { useGesture } from '@use-gesture/react'

import classes from './classes'

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

export const ScrollBar = memo((props: { itemsAmount: number }) => {
  const { itemsAmount } = props

  const [counter, setCounter] = useState(0)
  const increaseCounter = () => setCounter((prev) => prev + 1)

  const [contentRef, { height: contentHeight }] = useMeasure()
  const [containerRef, { height: containerHeight }] = useMeasure()

  const height = contentHeight - containerHeight

  const [val, setVal] = useState(0)
  const [acting, setActing] = useState(false)

  const [{ y }, spring] = useSpring(() => ({ y: 0 }))

  useEffect(() => {
    if (height < 0 && val > 0) {
      setVal(0)
      return
    }

    if (height > 0 && val > height) {
      setVal(height)
      return
    }

    spring.start({ y: val })
  }, [val, spring, acting, height])

  const handler = (y: number, check?: boolean) => {
    if (check) {
      spring.start({ y: val + y })
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
          evt.event.stopPropagation()
          evt.event.nativeEvent.preventDefault()
          evt.event.nativeEvent.stopPropagation()
        }
      },
    },
    {
      wheel: {
        from: () => [0, 0],
        bounds: () => getWheelBounds(height, val),
        rubberband: height > 0 ? 0.3 : 0.15,
      },
      drag: {
        from: () => [0, 0],
        rubberband: height > 0 ? 0.3 : 0.15,
        bounds: () => getDragBounds(height, val),
        filterTaps: true,
      },
    }
  )

  const renderScrollBar = () => (
    <div className={classes.progressWrapper()}>
      <animated.div
        className={classes.progress()}
        style={{
          transform: y.to((val) =>
            interpolateScroll(contentHeight, containerHeight, val)
          ),
        }}
      />
    </div>
  )

  const renderItems = (amount: number) => (
    <>
      <div onClick={increaseCounter} className={classes.block()} />
      {Array.from({ length: amount - 1 }).map((_, index) => (
        <Fragment key={index}>
          <div className={classes.spacer()} />
          <div onClick={increaseCounter} className={classes.block()} />
        </Fragment>
      ))}
    </>
  )

  return (
    <div className={classes.container()} {...bind()} ref={containerRef}>
      <animated.div
        className={classes.content()}
        ref={contentRef}
        style={{
          paddingRight: height > 0 ? 9 : 0,
          transform: y.to((val) => `translate(0, ${-val}px)`),
        }}
      >
        {renderItems(itemsAmount)}
      </animated.div>
      <div className={classes.counter()}>{counter}</div>
      {height > 0 && renderScrollBar()}
    </div>
  )
})
