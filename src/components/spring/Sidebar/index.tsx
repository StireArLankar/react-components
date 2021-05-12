import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'
import {
  useTransition,
  useChain,
  animated,
  config,
  useSpringRef,
  useTrail,
} from 'react-spring'

import useStyles from './useStyles'

export interface SidebarProps {
  isOpen: boolean
  right?: boolean
}

export const sidebarTransform = (right?: boolean) =>
  right ? 'translateX(100%)' : 'translateX(-100%)'

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { isOpen, children = [], right } = props

  const classes = useStyles()

  const sidebarRef = useSpringRef()
  const transition = useTransition(isOpen, {
    from: {
      transform: sidebarTransform(right),
    },
    enter: {
      transform: 'translateX(0%)',
    },
    leave: {
      transform: sidebarTransform(right),
    },
    unique: true,
    config: config.stiff,
    ref: sidebarRef,
  })

  const childrenArray = React.Children.map(children, (child) => child) || []
  const items = childrenArray.map((_, index) => index)

  const itemsRef = useSpringRef()

  const trail = useTrail(items.length, {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateX(0%)' : sidebarTransform(right),
    ref: itemsRef,
  })

  useChain(
    isOpen ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
    isOpen ? [0, 0.4] : [0, 0.6]
  )

  const renderItems = () =>
    trail.map((props, index) => (
      <animated.div key={items[index]} style={props} className={classes.item}>
        {childrenArray[items[index]]}
      </animated.div>
    ))

  const sidebarClass = clsx({
    [classes.sidebar]: true,
    right,
    'custom-scroll': true,
  })

  const renderContent = () =>
    transition(
      (props, item, _, key) =>
        item && (
          <animated.div key={key} style={props} className={sidebarClass}>
            {renderItems()}
          </animated.div>
        )
    )

  return <>{renderContent()}</>
}
