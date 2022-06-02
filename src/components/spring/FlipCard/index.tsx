import { useState } from 'react'

import { animated, config, useSpring } from '@react-spring/web'

import classes from './_classes.css'
import { ReactComponent as Close } from './close.svg'
import { ReactComponent as Info } from './info.svg'

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

  const toggleFlipped = () => setIsFlipped((state) => !state)

  const renderFront = () => (
    <div className={classes.card({ active })}>
      {front}

      <button className={classes.buttonInfo} onClick={toggleFlipped}>
        <Info className={classes.buttonInfoIcon} />
      </button>
    </div>
  )

  const renderBack = () => (
    <div className={classes.back({ active })}>
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
