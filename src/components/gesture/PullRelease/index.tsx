import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'

export const PullRelease = () => {
  const [style, spring] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ down, movement: [x, y] }) => {
    spring.start(down ? { x, y } : { x: 0, y: 0 })
  })

  return <animated.div className={classes.box} {...bind()} style={style} />
}
