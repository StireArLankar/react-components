import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useSpring, animated } from 'react-spring'

import { useStyles } from './useStyles'

export interface FlipCardProps {
  back: JSX.Element
  front: JSX.Element
  active?: boolean
  dir?: dirKeys
}

type dirKeys = '+x' | '-x' | '+y' | '-y'

const mapper: Record<dirKeys, string> = {
  '+x': 'Y(',
  '-x': 'Y(-',
  '+y': 'X(',
  '-y': 'X(-',
}

const initial = { y: 0, z: 0 }

export const FlipCardScaled = (props: FlipCardProps) => {
  const { back, front, active, dir = '+x' } = props

  const [isFlipped, setIsFlipped] = useState(false)

  const [anim, set]: any = useSpring(() => ({
    from: initial,
    to: initial,
    config: (key: string): any =>
      key === 'y'
        ? { tension: 120, friction: 14, clamp: false }
        : { tension: 50, friction: 5, clamp: true },
  }))

  useEffect(() => {
    if (isFlipped) {
      set({ to: [{ z: 0.5 }, { y: 1, z: 1 }] })
    } else {
      set({ to: initial })
    }
  }, [isFlipped, set])

  const classes = useStyles()

  const frontClass = clsx(classes.card, active && classes.active)

  const backClass = clsx(classes.card, classes.back, active && classes.active)

  const renderFront = () => <div className={frontClass}>{front}</div>

  const renderBack = () => (
    <div
      className={backClass}
      style={{ transform: `rotate${mapper[dir]}180deg)` }}
    >
      {back}
    </div>
  )

  return (
    <animated.div
      className={classes.wrapper}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        transform: anim.z.interpolate(
          (z: number) => `translate3d(0, 0, ${300 * z}px)`
        ),
      }}
    >
      <animated.div
        className={classes.inner}
        style={{
          transform: anim.y.interpolate(
            (y: number) => `rotate${mapper[dir]}${180 * y}deg)`
          ),
          boxShadow: anim.z.interpolate(
            (z: number) => `0px ${15 * z}px ${30 * z}px 0px rgba(0, 0, 0, 0.7)`
          ),
        }}
      >
        {renderFront()}
        {renderBack()}
      </animated.div>
    </animated.div>
  )
}
