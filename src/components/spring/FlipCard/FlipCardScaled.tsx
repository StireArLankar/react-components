import { useState, useEffect } from 'react'

import { useSpring, animated } from '@react-spring/web'

import classes from './_classes.css'

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

  const [anim, spring] = useSpring(() => ({
    from: initial,
    to: initial,
    config: (key) =>
      key === 'y'
        ? { tension: 120, friction: 14, clamp: false }
        : { tension: 50, friction: 5, clamp: true },
  }))

  useEffect(() => {
    if (isFlipped) {
      spring.start({ to: [{ z: 0.5 }, { y: 1, z: 1 }] })
    } else {
      spring.start({ to: initial })
    }
  }, [isFlipped, spring])

  return (
    <animated.div
      className={classes.wrapper}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        transform: anim.z.to((z: number) => `translate3d(0, 0, ${300 * z}px)`),
      }}
    >
      <animated.div
        className={classes.inner}
        style={{
          transform: anim.y.to((y) => `rotate${mapper[dir]}${180 * y}deg)`),
          boxShadow: anim.z.to(
            (z) => `0px ${15 * z}px ${30 * z}px 0px rgba(0, 0, 0, 0.7)`
          ),
        }}
      >
        <div className={classes.card({ active })}>{front}</div>
        <div
          className={classes.back({ active })}
          style={{ transform: `rotate${mapper[dir]}180deg)` }}
        >
          {back}
        </div>
      </animated.div>
    </animated.div>
  )
}
