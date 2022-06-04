import React, {
  useEffect,
  useRef,
  PropsWithChildren,
  useState,
  useMemo,
  useCallback,
} from 'react'
import useMeasure from 'react-use-measure'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'
import { Control } from './Control'

export type SliderProps = {
  interval?: number
}

const trans = (val: number) => `translate3d(${val}px, 0, 0)`

const int = (x: number, count: number, i: number, step: number) => {
  const fullRange = step * count

  const boundedValue = x % fullRange

  const offset = boundedValue > 0 ? 0 : fullRange
  const positiveValue = boundedValue + offset

  const itemValue = positiveValue - step * i

  if (i === 0 && positiveValue > fullRange - step) {
    return positiveValue - fullRange
  }

  return Math.min(Math.max(itemValue, step * -1), step * 2)
}

const updateCurrentIndex = (val: number, step: number, current: number) => {
  const offset = val % step

  const diff = (val - offset) / step

  if (offset > step / 2) {
    return current + diff + 1
  } else if (offset < -step / 2) {
    return current + diff - 1
  }

  return current + diff
}

const getProgress = (selected: number, length: number) => {
  const rest = selected % length

  return rest < 0 ? -rest / length : (length - rest) / length
}

export const AutoSlider = (props: PropsWithChildren<SliderProps>) => {
  const { children, interval = 4000 } = props

  const [isHovered, setIsHovered] = useState(false)

  const length = useMemo(() => React.Children.count(children), [children])

  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  const [isDragging, setIsDragging] = useState(false)

  const isAnimating = useRef(false)

  const [ref, { width }] = useMeasure({ debounce: 100 })

  const [selected, setSelected] = useState(0)

  const [{ x }, setX] = useSpring(() => ({
    x: 0,
    onStart: () => {
      isAnimating.current = true
    },
    onRest: () => setSelected(recalcIndex),
    immediate: false,
  }))

  const recalcIndex: (n: number) => number = useCallback(
    (p: number) => {
      isAnimating.current = false
      if (Math.abs(p) > length) {
        const res = p < 0 ? ((p % length) + length) % length : p % length
        setX({ x: width * res, immediate: true })
        return res
      }
      return p
    },
    [length, setX, width]
  )

  const bind = useDrag(({ movement: [x], down, cancel }) => {
    // If 0 or 1 slide, then dont allow to drag
    if (length < 2) {
      cancel && cancel()
      return
    }

    if (down) {
      setIsDragging(true)
      setX({ x: selected * width + x * 2 })
    } else {
      setIsDragging(false)
      setSelected((prev) => updateCurrentIndex(x * 2, width, prev))
    }
  })

  useEffect(() => {
    console.log({ selected })
    setX({
      x: width * selected,
      immediate: false,
      onRest: () => setSelected(recalcIndex),
    })
  }, [width, setX, selected, isDragging, recalcIndex])

  useEffect(() => {
    let timer: NodeJS.Timeout

    // If cursor is outside of slider, user is not dragging slider and slides amount > 1,
    // then start timer
    if (!isHovered && !isDragging && length > 1) {
      const handler = () => {
        if (!isAnimating.current) {
          setSelected((prev) => prev - 1)
        }

        timer = setTimeout(handler, interval)
      }

      timer = setTimeout(handler, interval)
    }

    return () => clearTimeout(timer)
  }, [isHovered, isDragging, interval, length])

  const renderItems = () =>
    React.Children.map(children, (child, i) => (
      <animated.li
        className={classes.item}
        style={{
          transform: x.to((val) => trans(int(val, length, i, width))),
        }}
      >
        {child}
      </animated.li>
    ))

  return (
    <div
      className={classes.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      <ul className={classes.slides} {...bind()}>
        {renderItems()}
      </ul>

      <Control progress={getProgress(selected, length)} />
    </div>
  )
}
