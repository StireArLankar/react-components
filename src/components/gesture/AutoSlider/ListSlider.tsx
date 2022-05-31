import React, {
  useEffect,
  useRef,
  PropsWithChildren,
  useState,
  useMemo,
} from 'react'
import useMeasure from 'react-use-measure'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import useStyles from './AutoSlider.styles'
import { Control } from './Control'

export interface SliderProps {
  interval?: number
}

const trans = (number: number) => `translate3d(-${number * 100}%, 0, 0)`

const int = (x: number, count: number) => {
  const boundedValue = x % count

  const offset = boundedValue > 0 ? 0 : count
  const positiveValue = boundedValue + offset

  return count - Math.min(positiveValue, count)
}

const updateCurrentIndex = (x: number, width: number, current: number) => {
  const offset = x % width

  const diff = (x - offset) / width

  if (offset > width / 2) {
    return current + diff + 1
  } else if (offset < -width / 2) {
    return current + diff - 1
  }

  return current + diff
}

const getProgress = (selected: number, length: number) => {
  const rest = selected % length

  return rest < 0 ? -rest / length : (length - rest) / length
}

export const ListSlider = (props: PropsWithChildren<SliderProps>) => {
  const { children, interval = 4000 } = props

  const classes = useStyles()

  const [isHovered, setIsHovered] = useState(false)

  const length = useMemo(() => React.Children.count(children), [children])

  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  const [isDragging, setIsDragging] = useState(false)

  const isAnimating = useRef(false)

  const [ref, { width }] = useMeasure()

  const [selected, setSelected] = useState(0)

  const [{ x }, setX] = useSpring(() => ({
    x: 0,
    onStart: () => {
      isAnimating.current = true
    },
    onRest: () => {
      isAnimating.current = false
    },
  }))

  const bind = useDrag(({ movement: [x], down, cancel }) => {
    if (length < 2) {
      cancel && cancel()
      return
    }

    if (down) {
      setIsDragging(true)
      setX({ x: selected + (x * 2) / width })
    } else {
      setIsDragging(false)
      setSelected((prev) => updateCurrentIndex(x * 2, width, prev))
    }
  })

  useEffect(() => void setX({ x: selected }), [setX, selected, isDragging])

  useEffect(() => {
    let timer: NodeJS.Timeout

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
      <li className={classes.item2} key={i}>
        {child}
      </li>
    ))

  return (
    <div
      className={classes.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      <animated.ul
        className={classes.slides}
        {...bind()}
        style={{
          transform: x.to((val) => trans(int(val, length))),
          overflow: 'unset',
        }}
      >
        {length > 1 && renderItems()}
        <li className={classes.item2}>{React.Children.toArray(children)[0]}</li>
      </animated.ul>

      <Control progress={getProgress(selected, length)} />
    </div>
  )
}
