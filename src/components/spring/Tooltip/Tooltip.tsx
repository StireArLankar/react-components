import { PropsWithChildren, useRef } from 'react'

import { animated, useTransition } from '@react-spring/web'

import classes from './classes'

export interface TooltipProps {
  isOpen: boolean
  position: 'top' | 'bottom'
}

export const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
  const { isOpen, children, position: side } = props

  const ref = useRef<HTMLDivElement>(null)

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
            className={classes.popup({ side }).className}
            key={key}
            style={props}
            ref={ref}
          >
            <div className={classes.content({ side }).className}>
              {children}
            </div>
          </animated.div>
        ) : null
      )}
    </>
  )
}
