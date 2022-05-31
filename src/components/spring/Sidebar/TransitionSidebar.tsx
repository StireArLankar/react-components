import React, { PropsWithChildren } from 'react'

import {
  animated,
  config,
  useChain,
  useSpringRef,
  useTransition,
} from '@react-spring/web'

import classes from './_classes.css'

import { SidebarProps, sidebarTransform } from '.'

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { isOpen, children = [], right } = props

  const sidebarRef = useSpringRef()
  const transition = useTransition(isOpen, {
    from: { x: sidebarTransform(right) },
    enter: { x: '0%' },
    leave: { x: sidebarTransform(right) },
    unique: true,
    config: config.stiff,
    ref: sidebarRef,
  })

  const childrenArray = React.Children.map(children, (child) => child)
  const items = childrenArray?.map((_, index) => index) || []

  const itemsRef = useSpringRef()
  const trail = useTransition(isOpen ? items : [], {
    from: { opacity: 0, x: sidebarTransform(right) },
    enter: { opacity: 1, x: '0%' },
    leave: { opacity: 0, x: sidebarTransform(right) },
    ref: itemsRef,
    config: { friction: 18 },
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

  const sidebarClass = classes.sidebar({ side: right ? 'right' : 'left' })

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
