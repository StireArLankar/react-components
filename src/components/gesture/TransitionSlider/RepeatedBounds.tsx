import { useRef, useMemo } from 'react'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import clamp from '~/utils/clamp'

import classes from './_classes.css'
import imgsBase from './imgs'

const STEP = 100
const WIDTH = 100

const trans = (val: number) => `translate3d(${(val * WIDTH) / STEP}px, 0, 0)`
// range = [-100, 100 * number]
// number = number shown + 1
const int = (x: number, count: number, i: number, number: number) => {
  // Range of possible values
  // [0...max]
  const fullRange = STEP * (count - number)

  // Current x value bounded by full cycle
  // [0...val...max] or [-max...val...0]
  const boundedValue = x % fullRange

  // Needed for transforming negative value to positive
  // [-max...val...0] => [0...val...max]
  const offset =
    boundedValue > 0 ? STEP * (number - 1) : fullRange + STEP * (number - 1)

  const positiveValue = boundedValue + offset

  // Value normilized to [0...val...STEP] for each item
  const itemValue = positiveValue - STEP * i

  return clamp(itemValue, STEP * -1, STEP * number)
}

export interface RepeatedBoundsProps {
  start?: number
  overflow?: boolean
  hideValues?: boolean
  number?: number
}

export const RepeatedBounds = (props: RepeatedBoundsProps) => {
  const { start = 0, overflow, hideValues, number = 2 } = props

  const [{ x }, spring] = useSpring(() => ({
    x: start,
    config: { mass: 5, tension: 170, friction: 80 },
  }))

  const imgs = useMemo(() => {
    const len = imgsBase.length
    let counter = number
    let result = [...imgsBase]

    while (counter > len) {
      counter = counter - len
      result = [...imgsBase, ...result]
    }

    return [...imgsBase.slice(-counter), ...result]
  }, [number])

  // Ref for memoizing value between drags
  const dragOffset = useRef(start)

  const bind = useDrag(
    ({ movement: [x], down, velocity: [vx], direction: [dx] }) => {
      if (down) {
        spring.start({ x: dragOffset.current + x })
        return
      }

      dragOffset.current += x + vx * dx * 200
      // dragOffset.current += x
      spring.start({ x: dragOffset.current })
    },
    { axis: 'x' }
  )

  const renderImages = () =>
    imgs.map((img, index) => (
      <animated.li
        key={index}
        className={classes.container}
        style={{
          transform: x.to((val) => trans(int(val, imgs.length, index, number))),
          width: WIDTH,
          height: WIDTH,
        }}
      >
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      </animated.li>
    ))

  const renderValues = () =>
    imgs.map((_, index) => (
      <animated.p className={classes.value} key={index}>
        {x.to((val) => int(val, imgs.length, index, number).toFixed(0))}
      </animated.p>
    ))

  return (
    <div
      className={classes.wrapperBig}
      {...bind()}
      style={{ overflow: overflow ? 'unset' : 'hidden', width: number * WIDTH }}
    >
      <ul className={classes.list}>{renderImages()}</ul>
      {!hideValues && <ul className={classes.values}>{renderValues()}</ul>}
    </div>
  )
}
