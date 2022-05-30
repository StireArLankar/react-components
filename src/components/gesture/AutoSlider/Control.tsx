import React from 'react'
import { animated, useSpring } from '@react-spring/web'

import useStyles from './Control.styles'

interface ControlProps {
  progress: number
}

export const Control = (props: ControlProps) => {
  const { progress } = props

  const classes = useStyles()

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
