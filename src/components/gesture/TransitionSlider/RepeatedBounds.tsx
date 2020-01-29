import React, { useEffect, useRef, useMemo } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useStyles from './useStyles'
import clamp from 'lodash-es/clamp'
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

  const classes = useStyles()

  const [{ x }, setX] = useSpring(() => ({
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
    ({ movement: [x], down, vxvy: [vx] }) => {
      if (down) {
        setX({
          x: dragOffset.current + x,
        })
      } else {
        dragOffset.current += x + vx * 200
        // dragOffset.current += x
        setX({
          x: dragOffset.current,
        })
      }
    },
    { domTarget: window }
  )

  useEffect(() => {
    bind()
  }, [bind])

  const renderImages = () =>
    imgs.map((img, index) => (
      <animated.li
        className={classes.container}
        style={{
          transform: x.interpolate((val) =>
            trans(int(val, imgs.length, index, number))
          ),
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
      <animated.p className={classes.value}>
        {x.interpolate((val) =>
          int(val, imgs.length, index, number).toFixed(0)
        )}
      </animated.p>
    ))

  return (
    <div
      className={classes.wrapperBig}
      style={{ overflow: overflow ? 'unset' : 'hidden', width: number * WIDTH }}
    >
      <ul className={classes.list}>{renderImages()}</ul>
      {!hideValues && <ul className={classes.values}>{renderValues()}</ul>}
    </div>
  )
}
