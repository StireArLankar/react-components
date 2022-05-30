import React, { useEffect, useRef, useState, memo } from 'react'
import { useSpring, animated, to } from '@react-spring/web'

import { useGesture } from '@use-gesture/react'
import clamp from '~/utils/clamp'

import classes from './classes'
import { data } from './data'

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

const setStable = (
  x: number,
  y: number,
  max: number,
  step: number,
  active?: boolean
) => ({
  x: active ? 0 : x,
  y: active ? 0 : y,
  bottom: active ? 7 : max * step + 7,
  right: active ? 7 : max * step + 7,
  scalE: 1,
  zIndeX: active ? 10 : 0,
  shadow: 1,
})

const setDragging = (x: number, y: number, max: number, step: number) => ({
  x,
  y,
  bottom: max * step + 7,
  right: max * step + 7,
  scalE: 1.1,
  zIndeX: 100,
  shadow: 15,
})

export const CrazyItem = memo((props: ItemProps) => {
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

  const isDragging = useRef(false)
  const [oldPos, setOldPos] = useState([...position])

  const [styles, spring] = useSpring(() =>
    setStable(position[0] * step, position[1] * step, max, step)
  )

  const { x, y, bottom, right, scalE, zIndeX, shadow } = styles

  useEffect(() => {
    if (!isDragging.current) {
      setOldPos([...position])
      const newSpringValues = setStable(
        position[0] * step,
        position[1] * step,
        max,
        step,
        active
      )

      spring.start(newSpringValues)
    }
  }, [position, spring, step, active, max])

  const bind = useGesture(
    {
      onClick: () => void onClick(index),
      onDragStart: () => {
        isDragging.current = true
        onStart()
      },
      onDragEnd: () => void (isDragging.current = false),
      onDrag: ({ down, movement: [x, y] }) => {
        const newX = updateAxis(x, step, oldPos[0], max)
        const newY = updateAxis(y, step, oldPos[1], max)

        if (down) {
          const newSpringValues = setDragging(
            oldPos[0] * step + x,
            oldPos[1] * step + y,
            max,
            step
          )

          spring.start(newSpringValues)
        } else {
          setOldPos([newX, newY])

          const newSpringValues = setStable(
            newX * step,
            newY * step,
            max,
            step,
            active
          )

          spring.start(newSpringValues)
        }

        updatePosition(index, newX, newY)
      },
    },
    { drag: { filterTaps: true } }
  )

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
        width: 'auto',
        height: 'auto',
        bottom,
        right,
      }}
    >
      <div className={classes.side()} style={{ background: data[index].css }}>
        {data[index].name}
      </div>
    </animated.div>
  )
})
