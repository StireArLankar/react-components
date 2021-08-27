import React from 'react'
import { useSpring, animated, config } from 'react-spring'

import {
  RadialButtonModel,
  RadialButtons,
  RadialButtonsProps,
} from './RadialButtons'
import { useStyles } from './useStyles'
import { CentralButton, CentralButtonProps } from './CentralButton'

export interface RadialMenuProps {
  isOpen: boolean
  buttons: RadialButtonModel[]
  onClick: () => void
}

export const RadialMenu = (props: RadialMenuProps) => {
  const { isOpen, buttons, onClick } = props
  const classes = useStyles()

  const centralButtonProps: CentralButtonProps = {
    isOpen,
    onClick,
  }

  const radialButtonsProps: RadialButtonsProps = {
    isOpen,
    buttons,
  }

  const { x } = useSpring({
    x: isOpen ? 720 : 0,
    config: config.slow,
  })

  return (
    <animated.div
      className={classes.wrapper}
      style={{ transform: x.to((val) => `rotate(${val}deg)`) }}
    >
      <CentralButton {...centralButtonProps} />
      <RadialButtons {...radialButtonsProps} />
    </animated.div>
  )
}
