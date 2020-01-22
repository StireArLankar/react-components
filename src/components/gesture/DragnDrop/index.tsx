import React, { useState } from 'react'
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { useDrag } from 'react-use-gesture'
import { useSprings, animated, interpolate } from 'react-spring'
import { useStyles } from './useStyles'

const immediate = (key: string) => key === 'y' || key === 'zIndex'
const notImmediate = () => false

const fn = (
  order: number[],
  down?: boolean,
  originalIndex?: number,
  curIndex: number = 0,
  y: number = 0
) => (index: number) => {
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
  const classes = useStyles()

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

    setSprings(fn(newOrder, down, originalIndex, curIndex, y) as any)

    if (!down) {
      setState(newOrder)
    }
  })

  return (
    <div className={classes.wrapper} style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i: number) => (
        <animated.div
          {...bind(i)}
          key={i}
          className={classes.item}
          style={{
            zIndex: zIndex.interpolate((val: number) => val.toFixed(0)) as any,
            boxShadow: shadow.interpolate(
              (s: number) => `0px ${s}px ${2 * s}px 0px rgba(0, 0, 0, 0.3) `
            ),
            transform: interpolate(
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
