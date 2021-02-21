//@ts-nocheck
import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSpring, animated, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import useStyles from './useStyles'

const updateVal = (val: number, step: number, current: number, max: number) => {
  const offset = val % step

  if (offset > step / 2) {
    return clamp(current + val - offset + step, 0, max * step)
  } else if (offset < -step / 2) {
    return clamp(current + val - offset - step, 0, max * step)
  }
  return clamp(current + val - offset, 0, max * step)
}

export const Item = (props: { index: number; step: number; max: number }) => {
  const { index, step, max } = props

  const classes = useStyles()

  const [{ x, y, scalE, zIndeX, shadow }, set] = useSpring(() => ({
    x: index * step,
    y: 0,
    scalE: 1,
    zIndeX: 0,
    shadow: 1,
  }))

  const dragOffset = useRef({ x: index * step, y: 0 })

  const bind = useDrag(({ down, movement: [x, y] }) => {
    if (down) {
      set({
        x: dragOffset.current.x + x,
        y: dragOffset.current.y + y,
        scalE: 1.1,
        zIndeX: 100,
        shadow: 15,
      })
    } else {
      dragOffset.current.x = updateVal(x, step, dragOffset.current.x, max)
      dragOffset.current.y = updateVal(y, step, dragOffset.current.y, max)

      set({
        x: dragOffset.current.x,
        y: dragOffset.current.y,
        scalE: 1,
        zIndeX: 0,
        shadow: 1,
      })
    }
  })

  return (
    <animated.div
      {...bind()}
      className={classes.item}
      style={{
        zIndex: zIndeX.interpolate((val) => val.toFixed(0)) as any,
        boxShadow: shadow.interpolate(
          (s: number) => `0px ${s}px ${2 * s}px 0px rgba(0, 0, 0, 0.3)`
        ),
        transform: interpolate(
          [y, x, scalE],
          (y, x, scalE) => `translate3d(${x}px, ${y}px, 0) scale(${scalE})`
        ),
      }}
    />
  )
}
