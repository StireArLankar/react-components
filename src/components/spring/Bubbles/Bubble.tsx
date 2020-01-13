import React, { useState, Fragment } from 'react'
import { useTransition, animated } from 'react-spring'
import { BubbleSvg } from './BubbleSvg'
import { useStyles } from './useStyles'

export interface BubbleProps {
  afterDestroy: () => void
}

export const Bubble = (props: BubbleProps) => {
  const { afterDestroy } = props
  const [isActive, setIsActive] = useState(true)

  const classes = useStyles()

  const transitions = useTransition(isActive, null, {
    initial: {
      transform: 'scale(1)',
    },
    enter: {
      transform: 'scale(1)',
    },
    leave: {
      transform: 'scale(0.01)',
    },
    from: {
      transform: 'scale(0.01)',
    },
    onDestroyed: afterDestroy,
  })

  return (
    <Fragment>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} style={props} className={classes.item}>
            <BubbleSvg onClick={() => setIsActive(false)} />
          </animated.div>
        ) : null
      )}
    </Fragment>
  )
}
