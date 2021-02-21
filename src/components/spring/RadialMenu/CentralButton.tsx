//@ts-nocheck
import React from 'react'
import clsx from 'clsx'
import { useSpring, animated } from 'react-spring'
import Adjust from '@material-ui/icons/Adjust'
import HighlightOff from '@material-ui/icons/HighlightOff'

import { useStyles } from './useStyles'

export interface CentralButtonProps {
  isOpen: boolean
  onClick: () => void
}

export const CentralButton = (props: CentralButtonProps) => {
  const { isOpen, onClick } = props

  const spring = useSpring({
    s: isOpen ? 1 : 0,
  })

  const classes = useStyles()

  return (
    <button onClick={onClick} className={clsx('central', classes.button)}>
      <animated.div
        style={{
          transform: spring.s.interpolate((val) => `scale(${val})`),
          zIndex: isOpen ? 1 : 0,
        }}
        className={clsx(classes.animated, classes.overflow)}
      >
        <HighlightOff className={clsx(classes.icon, 'close')} />
      </animated.div>
      <animated.div
        style={{
          transform: spring.s.interpolate((val) => `scale(${1 - val})`),
          zIndex: isOpen ? 0 : 1,
        }}
        className={clsx(classes.animated, classes.overflow)}
      >
        <Adjust className={clsx(classes.icon, 'open')} />
      </animated.div>
    </button>
  )
}
