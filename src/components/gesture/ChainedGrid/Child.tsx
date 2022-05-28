import { memo, useEffect } from 'react'
import { animated, to, useSpring } from 'react-spring'

import classes from './classes'
import { data } from './data'

export interface ChildProps {
  index: number
  active: boolean
}

const initial = { y: 0, z: 0 }

export const Child = memo((props: ChildProps) => {
  const { index, active } = props

  const [{ z, y }, spring] = useSpring(() => ({
    from: initial,
    to: initial,
    config: (key) =>
      key === 'y'
        ? { tension: 120, friction: 14, clamp: false }
        : { tension: 50, friction: 5, clamp: true },
  }))

  useEffect(() => {
    if (active) {
      spring.start({ to: [{ z: 0.5 }, { y: 1, z: 1 }] })
      return
    }

    spring.start({ to: initial })
  }, [active, spring])

  const renderFront = () => (
    <div className={classes.card({ side: 'front' })}>
      <div className={classes.side()} style={{ background: data[index].css }}>
        {index}
      </div>
    </div>
  )

  const renderBack = () => (
    <div className={classes.card({ side: 'back' })}>
      <div className={classes.side()} style={{ background: data[index].css }}>
        {data[index].name}
      </div>
    </div>
  )

  return (
    <animated.div
      className={classes.inner()}
      style={{
        transform: to(
          [y, z],
          (y, z) => `rotateY(${180 * y}deg) scale(${1 + z})`
        ),
        boxShadow: z.to(
          (z) => `0px ${15 * z}px ${30 * z}px 0px rgba(0, 0, 0, 0.7)`
        ),
      }}
    >
      {renderFront()}
      {renderBack()}
    </animated.div>
  )
})
