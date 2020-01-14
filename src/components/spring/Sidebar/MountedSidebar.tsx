import React, { useRef, Fragment, PropsWithChildren } from 'react'
import clsx from 'clsx'
import {
  useChain,
  animated,
  config,
  ReactSpringHook,
  useTrail,
  useSpring,
} from 'react-spring'

import { SidebarProps, sidebarTransform } from '.'
import useStyles from './useStyles'

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { isOpen, children = [], right } = props

  const classes = useStyles()

  const sidebarRef = useRef<ReactSpringHook>(null)

  const sidebarAnim = useSpring({
    from: {
      transform: isOpen ? 'translateX(0%)' : sidebarTransform(right),
    },
    transform: isOpen ? 'translateX(0%)' : sidebarTransform(right),
    config: config.stiff,
    ref: sidebarRef,
  })

  const childrenArray = React.Children.map(children, (child) => child)
  const itemsRef = useRef<ReactSpringHook>(null)
  const trail = useTrail(childrenArray.length, {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateX(0%)' : sidebarTransform(right),
    ref: itemsRef,
    config: {
      friction: 20,
    },
  })

  useChain(
    isOpen ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
    isOpen ? [0, 0.4] : [0, 0.6]
  )

  const renderItems = () =>
    trail.map((props, index) => (
      <animated.div key={index} style={props} className={classes.item}>
        {childrenArray[index]}
      </animated.div>
    ))

  const sidebarClass = clsx({
    [classes.sidebar]: true,
    right,
    'custom-scroll': true,
  })

  const renderContent = () => (
    <animated.div style={sidebarAnim} className={sidebarClass}>
      {renderItems()}
    </animated.div>
  )

  return <Fragment>{renderContent()}</Fragment>
}
