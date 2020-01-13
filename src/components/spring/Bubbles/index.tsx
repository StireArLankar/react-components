import React, { useState } from 'react'
import { Bubble } from './Bubble'

import useStyles from './useStyles'
import { useTransition, animated, useSprings } from 'react-spring'

const initiaItems = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export const Bubbles = () => {
  const [items, setItems] = useState([...initiaItems])

  const afterDestroy = (index: number) => () =>
    setItems((prev) => prev.filter((item) => item !== index))

  const classes = useStyles()

  const transitions = useTransition(items, (item) => item, {
    initial: {
      width: 100,
    },
    enter: {
      width: 100,
    },
    from: {
      width: 0,
    },
    leave: {
      width: 0,
    },
    unique: true,
  })

  const [springs2, set] = useSprings(initiaItems.length, (i) => ({
    config: {
      mass: (i + 1) * 6 - 3,
      tension: 300,
      friction: 30 + i * 5,
    },
    from: {
      y: 0,
    },
    to: {
      y: 1,
    },
    clamp: true,
    onRest: (key: any) => {
      if (i === 0) {
        setTimeout(() => set({ to: { y: key.y === 0 ? 1 : 0 } }))
      }
    },
  }))

  return (
    <ul className={classes.list}>
      {transitions.map(({ item, props, key, state }) => (
        <animated.div
          key={key}
          className={classes.item}
          style={{
            width: state === 'leave' ? props.width : '',
            transform: (springs2[item] as any).y.interpolate(
              (y: number) => `translateY(${y * 100}px)`
            ),
          }}
        >
          <Bubble afterDestroy={afterDestroy(item)} />
        </animated.div>
      ))}
    </ul>
  )
}
