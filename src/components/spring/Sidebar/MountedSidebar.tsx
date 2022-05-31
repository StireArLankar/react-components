import React, { PropsWithChildren } from 'react'

import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTrail,
} from '@react-spring/web'

import classes from './_classes.css'

import { SidebarProps, sidebarTransform } from '.'

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { isOpen, children = [], right } = props

  const sidebarRef = useSpringRef()

  const sidebarAnim = useSpring({
    x: isOpen ? '0%' : sidebarTransform(right),
    config: config.stiff,
    ref: sidebarRef,
  })

  const childrenArray = React.Children.map(children, (child) => child)
  const itemsRef = useSpringRef()
  const trail = useTrail(childrenArray?.length || 0, {
    opacity: isOpen ? 1 : 0,
    x: isOpen ? '0%' : sidebarTransform(right),
    ref: itemsRef,
    config: { friction: 20 },
  })

  useChain(
    isOpen ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
    isOpen ? [0, 0.4] : [0, 0.6]
  )

  const renderItems = () =>
    trail.map((props, index) => (
      <animated.div key={index} style={props} className={classes.item}>
        {childrenArray?.[index]}
      </animated.div>
    ))

  const sidebarClass = classes.sidebar({ side: right ? 'right' : 'left' })

  const renderContent = () => (
    <animated.div style={sidebarAnim} className={sidebarClass}>
      {renderItems()}
    </animated.div>
  )

  return <>{renderContent()}</>
}
