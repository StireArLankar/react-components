import React, { PropsWithChildren } from 'react'

import {
  animated,
  config,
  useChain,
  useSpringRef,
  useTrail,
  useTransition,
} from '@react-spring/web'

import classes from './_classes.css'

export interface SidebarProps {
  isOpen: boolean
  right?: boolean
}

export const sidebarTransform = (right?: boolean) => (right ? '100%' : '-100%')

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

  const childrenArray = React.Children.map(children, (child) => child) || []
  const items = childrenArray.map((_, index) => index)

  const itemsRef = useSpringRef()

  const trail = useTrail(items.length, {
    opacity: isOpen ? 1 : 0,
    x: isOpen ? '0%' : sidebarTransform(right),
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
