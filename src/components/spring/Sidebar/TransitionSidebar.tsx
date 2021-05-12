import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'
import {
  useTransition,
  useChain,
  animated,
  config,
  useSpringRef,
} from 'react-spring'

import useStyles from './useStyles'

import { SidebarProps, sidebarTransform } from '.'

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

  const childrenArray = React.Children.map(children, (child) => child)
  const items = childrenArray?.map((_, index) => index) || []

  const itemsRef = useSpringRef()
  const trail = useTransition(isOpen ? items : [], {
    from: {
      opacity: 0,
      transform: sidebarTransform(right),
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: sidebarTransform(right),
    },
    ref: itemsRef,
    config: {
      friction: 18,
    },
    trail: 100,
    unique: true,
  })

  useChain(
    isOpen ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
    isOpen ? [0, 0.4] : [0, 0.6]
  )

  const renderItems = () =>
    trail((props, item, _, key) => (
      <animated.div key={item} style={props} className={classes.item}>
        {childrenArray?.[item]}
      </animated.div>
    ))

  const sidebarClass = clsx({
    [classes.sidebar]: true,
    'custom-scroll': true,
    right,
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
