import useMeasure from 'react-use-measure'

import { animated, useSpring } from '@react-spring/web'
import { useWheel } from '@use-gesture/react'

import classes from './_classes.css'
import imgs from './imgs'

const wheel = (y: number, height: number, count: number) => {
  const start = y % (height * count)
  const offset = -height * (y < 0 ? count + 1 : 1)
  return `translateY(${offset - start}px)`
}

export const VerticalWheel = () => {
  const [ref, { height }] = useMeasure()
  const [{ wheelY }, spring] = useSpring(() => ({ wheelY: 0 }))
  const bind = useWheel(({ offset: [, y] }) => spring.start({ wheelY: y }))

  return (
    <div className={classes.wrapper}>
      <animated.div
        {...bind()}
        ref={ref}
        className={classes.inner}
        style={{ transform: wheelY.to((val) => wheel(val, height, 5)) }}
      >
        {imgs.map((img, i) => (
          <div
            key={i}
            className={classes.img}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </animated.div>
    </div>
  )
}
