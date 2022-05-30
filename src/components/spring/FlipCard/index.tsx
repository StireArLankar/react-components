import React, { useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'

import clsx from 'clsx'

import { ReactComponent as Close } from './close.svg'
import { ReactComponent as Info } from './info.svg'
import { useStyles } from './useStyles'

export interface FlipCardProps {
  back: JSX.Element
  front: JSX.Element
  active?: boolean
}

export const FlipCard = (props: FlipCardProps) => {
  const { back, front, active } = props

  const [isFlipped, setIsFlipped] = useState(false)

  const animProps = useSpring({
    transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
    config: config.gentle,
  })

  const classes = useStyles()

  const toggleFlipped = () => setIsFlipped((state) => !state)

  const frontClass = clsx(classes.card, active && classes.active)

  const backClass = clsx(classes.card, classes.back, active && classes.active)

  const renderFront = () => (
    <div className={frontClass}>
      {front}

      <button className={classes.buttonInfo} onClick={toggleFlipped}>
        <Info className={classes.buttonInfoIcon} />
      </button>
    </div>
  )

  const renderBack = () => (
    <div className={backClass}>
      {back}

      <button className={classes.buttonInfo} onClick={toggleFlipped}>
        <Close className={classes.buttonInfoIcon} />
      </button>
    </div>
  )

  return (
    <div className={classes.wrapper}>
      <animated.div className={classes.inner} style={animProps}>
        {renderFront()}
        {renderBack()}
      </animated.div>
    </div>
  )
}
