import React from 'react'
import cn from 'classnames'
import { useSpring, animated } from 'react-spring'
import { Adjust, HighlightOff } from '@material-ui/icons'
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
    <button onClick={onClick} className={cn('central', classes.button)}>
      <animated.div
        style={{
          transform: spring.s.interpolate((val) => `scale(${val})`),
          zIndex: isOpen ? 1 : 0,
        }}
        className={cn(classes.animated, classes.overflow)}
      >
        <HighlightOff className={cn(classes.icon, 'close')} />
      </animated.div>
      <animated.div
        style={{
          transform: spring.s.interpolate((val) => `scale(${1 - val})`),
          zIndex: isOpen ? 0 : 1,
        }}
        className={cn(classes.animated, classes.overflow)}
      >
        <Adjust className={cn(classes.icon, 'open')} />
      </animated.div>
    </button>
  )
}
