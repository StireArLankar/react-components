import React, { useState } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import clamp from 'lodash-es/clamp'

import useStyles from './useStyles'
import imgs from './imgs'

const STEP = 200
const WIDTH = 200

// range: [-200, 400]
const trans = (num: number) =>
  `translate3d(${(num * WIDTH) / STEP}px, 0, 0) scale(${
    1.2 - (Math.abs(-100 + num) * 4) / (200 * 10)
  })`

const int = (x: number, i: number) => {
  const itemValue = x + STEP * i

  return clamp(itemValue, STEP * -1, STEP * 2)
}

const arr = Array.from({ length: 200 }, () => imgs)
  .flat()
  .map((img, index) => ({ index, img }))

const slicer = (
  isVirt: boolean,
  active: number,
  arr: Array<{ index: number; img: string }>
) => (isVirt ? arr.slice(Math.max(active - 15, 0), active + 10) : arr)

export interface VirtualizedProps {
  start?: number
  isVirt?: boolean
}

export const Virtualized = (props: VirtualizedProps) => {
  const { start = 0, isVirt = false } = props

  const classes = useStyles()
  const [{ x }, setX] = useSpring(() => ({
    x: start,
    config: { mass: 5, tension: 170, friction: 80 },
  }))

  const [active, setActive] = useState(5)

  const bind = useDrag(
    ({ movement: [x] }) => {
      setX({ x: x })
      isVirt && setActive(Math.floor(-x / STEP) + 3)
    },
    {
      initial: () => [x.getValue(), 0],
      bounds: {
        right: 0,
        left: -STEP * (arr.length - 2),
      },
      rubberband: 0.3,
    }
  )

  const renderImages = () =>
    slicer(isVirt, active, arr).map((obj) => (
      <animated.li
        key={obj.index}
        className={classes.container}
        style={{
          transform: x.to((val) => trans(int(val, obj.index))),
        }}
      >
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${obj.img})` }}
        />
      </animated.li>
    ))

  return (
    <div className={classes.wrapperBig}>
      <p className={classes.text}>
        {isVirt ? `Virtualized ${arr.length}` : 'Not virtualized'}
      </p>
      <ul className={classes.list} {...bind()}>
        {renderImages()}
      </ul>
    </div>
  )
}
