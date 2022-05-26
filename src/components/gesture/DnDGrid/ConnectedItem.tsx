import React, { useEffect } from 'react'
import { useSpring, animated, to } from 'react-spring'

import { useDrag } from '@use-gesture/react'
import clamp from 'lodash-es/clamp'

import classes from './classes'

const updateAxis = (
  val: number,
  step: number,
  current: number,
  max: number
) => {
  const offset = val % step

  const diff = (val - offset) / step

  if (offset > step / 2) {
    return clamp(current + diff + 1, 0, max)
  } else if (offset < -step / 2) {
    return clamp(current + diff - 1, 0, max)
  }
  return clamp(current + diff, 0, max)
}

export interface ConnectedItemProps {
  index: number
  step: number
  max: number
  position: [number, number]

  updatePosition: (index: number, x: number, y: number) => void
}

export const ConnectedItem = (props: ConnectedItemProps) => {
  const { index, step, max, position, updatePosition } = props

  const update = (x: number, y: number) => updatePosition(index, x, y)

  const [{ x, y, scalE, zIndeX, shadow, opacity }, set] = useSpring(() => ({
    x: position[0] * step,
    y: position[1] * step,
    scalE: 1,
    zIndeX: 0,
    shadow: 1,
    opacity: 0.6,
  }))

  useEffect(() => {
    set({
      x: position[0] * step,
      y: position[1] * step,
      scalE: 1,
      zIndeX: 0,
      shadow: 1,
      opacity: 0.6,
    })
  }, [position, set, step])

  const bind = useDrag(({ down, movement: [x, y] }) => {
    if (down) {
      set({
        x: position[0] * step + x,
        y: position[1] * step + y,
        scalE: 1.1,
        zIndeX: 100,
        shadow: 15,
        opacity: 1,
      })
    } else {
      const newX = updateAxis(x, step, position[0], max)
      const newY = updateAxis(y, step, position[1], max)

      update(newX, newY)
    }
  })

  return (
    <animated.div
      {...bind()}
      className={classes.item()}
      style={{
        zIndex: zIndeX.to((val) => Number(val.toFixed(0))),
        boxShadow: shadow.to(
          (s) => `0px ${s}px ${2 * s}px 0px rgba(0, 0, 0, 0.3)`
        ),
        transform: to(
          [y, x, scalE],
          (y, x, scalE) => `translate3d(${x}px, ${y}px, 0) scale(${scalE})`
        ),
        opacity,
      }}
    />
  )
}
