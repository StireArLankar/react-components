import { useState } from 'react'

import { useSprings, animated, to } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import clamp from '~/utils/clamp'
import swap from '~/utils/move'

import classes from './_classes.css'

const immediate = (key: string) => key === 'y' || key === 'zIndex'
const notImmediate = () => false

const fn =
  (
    order: number[],
    down?: boolean,
    originalIndex?: number,
    curIndex: number = 0,
    y: number = 0
  ) =>
  (index: number) => {
    if (down && index === originalIndex) {
      return {
        y: curIndex * 100 + y,
        scale: 1.1,
        zIndex: 100,
        shadow: 15,
        immediate: immediate,
      }
    }

    return {
      y: order.indexOf(index) * 100,
      scale: 1,
      zIndex: 0,
      shadow: 1,
      immediate: notImmediate,
    }
  }

const items = 'Lorem ipsum dolor sit'.split(' ')

export const DragnDrop = () => {
  const [state, setState] = useState(items.map((_, index) => index))

  const [springs, setSprings] = useSprings(items.length, fn(state))

  const bind = useDrag(({ args: [originalIndex], down, movement: [, y] }) => {
    const curIndex = state.indexOf(originalIndex)

    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1
    )

    const newOrder = swap(state, curIndex, curRow)

    setSprings.start(fn(newOrder, down, originalIndex, curIndex, y))

    if (!down) {
      setState(newOrder)
    }
  })

  return (
    <div className={classes.wrapper} style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          className={classes.item}
          style={{
            touchAction: 'none',
            zIndex: zIndex.to((val) => Number(val.toFixed(0))),
            boxShadow: shadow.to(
              (s) => `0px ${s}px ${2 * s}px 0px rgba(0, 0, 0, 0.3) `
            ),
            transform: to(
              [y, scale],
              (y, scale) => `translate3d(0, ${y}px, 0) scale(${scale})`
            ),
          }}
          children={items[i]}
        />
      ))}
    </div>
  )
}
