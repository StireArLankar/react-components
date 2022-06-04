import { animated, useSpring } from '@react-spring/web'

import classes from './_classes.css'

type ControlProps = {
  progress: number
}

export const Control = ({ progress }: ControlProps) => {
  const { x } = useSpring({ x: isNaN(progress) ? 0 : progress })

  return (
    <div className={classes.controls}>
      <animated.div
        className={classes.fill}
        style={{ transform: x.to((val) => `scaleX(${val})`) }}
      />
    </div>
  )
}
