import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import classes, { bgVar } from './_classes.css'
import { ReactComponent as Filter } from './filter.svg'

const trans = (y: number, c: number) =>
  `translateX(-50%) rotate(45deg) skew(${y * c}deg, ${y * c}deg)`

const dragOptions = {
  bounds: { top: -65, bottom: 50 },
}

export const Rubber = () => {
  const [{ y }, spring] = useSpring(() => ({ y: -20 }))

  const bind = useDrag(({ movement: [, y], down }) => {
    spring.start({ y: down ? -y - 20 : -20 })
  }, dragOptions)

  return (
    <>
      <Filter style={{ display: 'none' }} />
      <animated.div
        className={classes.wrapper}
        style={{
          bottom: y.to((y) => y * 0.5 + 10),
          ...assignInlineVars({ [bgVar]: 'rgba(255, 0, 0, 0.5)' }),
        }}
      >
        <animated.div
          className={classes.box}
          style={{ transform: y.to((y) => trans(y, 0.5)) }}
        />
        <animated.div
          className={classes.box}
          style={{ transform: y.to((y) => trans(y, 0.4)) }}
        />
        <animated.div
          className={classes.box}
          style={{ transform: y.to((y) => trans(y, 0.3)) }}
          {...bind()}
        />
        <animated.div
          className={classes.planc}
          style={{ height: y.to((y) => `${100 - y * 0.1}px`) }}
        />
      </animated.div>
    </>
  )
}
