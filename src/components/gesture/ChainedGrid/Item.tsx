//@ts-nocheck
import React, { useEffect, useRef, useState, memo } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import clamp from 'lodash-es/clamp'
import { useGesture } from 'react-use-gesture'

import useStyles from './useStyles'
import { Child } from './Child'

export interface ItemProps {
  index: number
  step: number
  max: number
  position: [number, number]
  active: boolean

  onClick: (index: number) => void
  onStart: () => void
  updatePosition: (index: number, x: number, y: number) => void
}

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

const setStable = (x: number, y: number, active?: boolean) => ({
  x,
  y,
  scalE: 1,
  zIndeX: active ? 10 : 0,
  shadow: 1,
})

const setDragging = (x: number, y: number) => ({
  x,
  y,
  scalE: 1.1,
  zIndeX: 100,
  shadow: 15,
})

export const Item = memo((props: ItemProps) => {
  const {
    index,
    step,
    max,
    position,
    onStart,
    updatePosition,
    active,
    onClick,
  } = props

  const classes = useStyles()

  const isDragging = useRef(false)
  const [oldPos, setOldPos] = useState([...position])

  const [{ x, y, scalE, zIndeX, shadow }, set] = useSpring(() =>
    setStable(position[0] * step, position[1] * step)
  )

  useEffect(() => {
    if (!isDragging.current) {
      setOldPos([...position])
      set(setStable(position[0] * step, position[1] * step, active))
    }
  }, [position, set, step, active])

  const bind = useGesture(
    {
      onDragStart: () => {
        isDragging.current = true
        onStart()
      },
      onDragEnd: () => {
        if (!isDragging.current) {
          onClick(index)
        }
        isDragging.current = false
      },
      onDrag: ({ down, movement: [x, y] }) => {
        const newX = updateAxis(x, step, oldPos[0], max)
        const newY = updateAxis(y, step, oldPos[1], max)
        if (down) {
          set(setDragging(oldPos[0] * step + x, oldPos[1] * step + y))
        } else {
          setOldPos([newX, newY])
          set(setStable(newX * step, newY * step, active))
        }

        updatePosition(index, newX, newY)
      },
    },
    { drag: { filterTaps: true } }
  )

  return (
    <animated.div
      {...bind()}
      className={classes.item}
      style={{
        zIndex: zIndeX.interpolate((val: number) => val.toFixed(0)) as any,
        boxShadow: shadow.interpolate(
          (s: number) => `0px ${s}px ${2 * s}px 0px rgba(0, 0, 0, 0.3)`
        ),
        transform: interpolate(
          [y, x, scalE],
          (y, x, scalE) => `translate3d(${x}px, ${y}px, 0) scale(${scalE})`
        ),
      }}
    >
      <Child index={index} active={active} />
    </animated.div>
  )
})
