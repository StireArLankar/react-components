import React, { useEffect, memo } from 'react'
import clsx from 'clsx'
import { useSpring, animated, interpolate } from 'react-spring'
import { useStyles } from './useStyles'
import { data } from './data'

export interface ChildProps {
  index: number
  active: boolean
}

const initial = { y: 0, z: 0 }

export const Child = memo((props: ChildProps) => {
  const { index, active } = props

  const [{ z, y }, set]: any = useSpring(() => ({
    from: initial,
    to: initial,
    config: (key: string): any =>
      key === 'y'
        ? { tension: 120, friction: 14, clamp: false }
        : { tension: 50, friction: 5, clamp: true },
  }))

  useEffect(() => {
    if (active) {
      set({ to: [{ z: 0.5 }, { y: 1, z: 1 }] })
    } else {
      set({ to: initial })
    }
  }, [active, set])

  const classes = useStyles()

  const frontClass = clsx(classes.card)

  const backClass = clsx(classes.card, classes.back)

  const renderFront = () => (
    <div className={frontClass}>
      <div
        className={classes.side}
        style={{
          background: data[index].css,
        }}
      >
        {index}
      </div>
    </div>
  )

  const renderBack = () => (
    <div className={backClass}>
      <div
        className={classes.side}
        style={{
          background: data[index].css,
        }}
      >
        {data[index].name}
      </div>
    </div>
  )

  return (
    <animated.div
      className={classes.inner}
      style={{
        transform: interpolate(
          [y, z],
          (y, z) => `rotateY(${180 * y}deg) scale(${1 + z})`
        ),
        boxShadow: z.interpolate(
          (z: number) => `0px ${15 * z}px ${30 * z}px 0px rgba(0, 0, 0, 0.7)`
        ),
      }}
    >
      {renderFront()}
      {renderBack()}
    </animated.div>
  )
})
