import React, { useState } from 'react'

import useStyles from './useStyles'
import { useTransition, animated, useSpring } from 'react-spring'
import { BubbleSvg } from './BubbleSvg'

const initiaItems = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const transf = (y: number, index: number) => {
  const value = y * 2 * Math.PI * 15 + (2 * Math.PI * index) / 8
  return `translate(0, ${Math.sin(value) * 100}px)`
}

export const Bubbles = () => {
  const [items, setItems] = useState([...initiaItems])
  const [counter, setCounter] = useState(1)

  const destroyBubble = (index: number) => () =>
    setItems((prev) => prev.filter((item) => item !== index))

  const classes = useStyles()

  const transitions = useTransition(items, (item) => item, {
    initial: {
      width: 100,
      opacity: 1,
    },
    enter: {
      width: 100,
      opacity: 1,
    },
    from: {
      width: 0,
      opacity: 0,
    },
    leave: {
      width: 0,
      opacity: 0,
    },
    unique: true,
  })

  const spring = useSpring({
    x: counter,
    from: {
      x: 0,
    },
    config: {
      duration: 30000,
    },
    immediate: counter === 0,
    onRest: () => setCounter(counter > 1000 ? 0 : counter + 1),
  })

  return (
    <ul className={classes.list}>
      {transitions.map(({ item, props, key }) => (
        <animated.li key={key} className={classes.item} style={props}>
          <animated.div
            className={classes.item}
            style={{
              transform: (spring as any).x.interpolate((val: number) =>
                transf(val, item)
              ),
            }}
          >
            <BubbleSvg onClick={destroyBubble(item)} />
          </animated.div>
        </animated.li>
      ))}
    </ul>
  )
}
