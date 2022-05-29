import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated, to } from 'react-spring'

import { useDrag } from '@use-gesture/react'
import clamp from '~/utils/clamp'

import classes from '../classes'

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

export interface ItemProps {
  index: number
  step: number
  max: number
  position: [number, number]

  updatePosition: (index: number, x: number, y: number) => void
}

export const Item = (props: ItemProps) => {
  const { index, step, max, position, updatePosition } = props

  const update = (x: number, y: number) => updatePosition(index, x, y)

  const isDragging = useRef(false)
  const [oldPos, setOldPos] = useState([...position])

  const [{ x, y, scalE, zIndeX, shadow }, set] = useSpring(() => ({
    x: position[0] * step,
    y: position[1] * step,
    scalE: 1,
    zIndeX: 0,
    shadow: 1,
  }))

  useEffect(() => {
    if (!isDragging.current) {
      setOldPos([...position])
      set({
        x: position[0] * step,
        y: position[1] * step,
        scalE: 1,
        zIndeX: 0,
        shadow: 1,
      })
    }
  }, [position, set, step])

  const bind = useDrag(({ down, movement: [x, y] }) => {
    const newX = updateAxis(x, step, oldPos[0], max)
    const newY = updateAxis(y, step, oldPos[1], max)
    if (down) {
      isDragging.current = true
      set({
        x: oldPos[0] * step + x,
        y: oldPos[1] * step + y,
        scalE: 1.1,
        zIndeX: 100,
        shadow: 15,
      })
    } else {
      isDragging.current = false
      setOldPos([newX, newY])
      set({
        x: newX * step,
        y: newY * step,
        scalE: 1,
        zIndeX: 0,
        shadow: 1,
      })
    }

    update(newX, newY)
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
      }}
    >
      <span className={classes.count()}>{index}</span>
    </animated.div>
  )
}
