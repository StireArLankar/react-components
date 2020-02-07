import React, { useEffect } from 'react'
import useStyles from '../useStyles'
import clamp from 'lodash-es/clamp'
import { useSpring, animated, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

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
  } else {
    return clamp(current + diff, 0, max)
  }
}

export interface LazyItemProps {
  index: number
  step: number
  max: number
  position: [number, number]

  updatePosition: (index: number, x: number, y: number) => void
}

export const LazyItem = (props: LazyItemProps) => {
  const { index, step, max, position, updatePosition } = props

  const classes = useStyles()

  const update = (x: number, y: number) => updatePosition(index, x, y)

  const [{ x, y, scalE, zIndeX, shadow }, set] = useSpring(() => ({
    x: position[0] * step,
    y: position[1] * step,
    scalE: 1,
    zIndeX: 0,
    shadow: 1,
  }))

  useEffect(() => {
    set({
      x: position[0] * step,
      y: position[1] * step,
      scalE: 1,
      zIndeX: 0,
      shadow: 1,
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
    >
      <span className={classes.count}>{index}</span>
    </animated.div>
  )
}
