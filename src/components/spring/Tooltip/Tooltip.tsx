import clsx from 'clsx'
import React, { PropsWithChildren, useRef } from 'react'
import { animated, useTransition } from 'react-spring'

import useStyles from './Tooltip.styles'

export interface TooltipProps {
  isOpen: boolean
  position: 'top' | 'bottom'
}

export const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
  const { isOpen, children, position } = props

  const ref = useRef<HTMLDivElement>(null)

  const classes = useStyles()

  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 250, clamp: true },
  })

  return (
    <>
      {transition((props, item, _, key) =>
        item ? (
          <animated.div
            className={clsx(classes.popup, classes[position])}
            key={key}
            style={props}
            ref={ref}
          >
            <div className={classes.content}>{children}</div>
          </animated.div>
        ) : null
      )}
    </>
  )
}
