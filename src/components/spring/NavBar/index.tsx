import React, { useState, useMemo } from 'react'
import { useTransition, animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'

import { useStyles } from './useStyles'

export interface NavBarProps {
  items: NavBarItem[]
  popoverWidth?: number
}

export interface NavBarItem {
  title: string
  content: JSX.Element
}

const transform = (index: number, width: number, popoverWidth: number) =>
  `translateX(${width * index - (popoverWidth - width) / 2}px)`

export const NavBar = (props: NavBarProps) => {
  const { items, popoverWidth = 300 } = props
  const [active, setActive] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const [ref, { width }] = useMeasure()
  const [contentRef, { height }] = useMeasure()

  const itemWidth = useMemo(() => width / items.length, [width, items.length])

  const classes = useStyles()

  const contentSpring = useSpring({
    height: isOpen ? height : 0,
    x: active,
  })

  const transitions = useTransition([items[active]], {
    from: {
      opacity: 0,
      position: 'relative' as const,
      width: '100%',
    },
    enter: {
      opacity: 1,
      position: 'relative' as const,
      width: '100%',
    },
    leave: {
      opacity: 0,
      position: 'absolute' as const,
      width: '100%',
    },
    keys: (item) => item.title,
    unique: true,
  })

  const renderContent = () =>
    transitions((props, item, _, key) => (
      <animated.div key={item.title} style={{ ...props, left: 0 }}>
        {item.content}
      </animated.div>
    ))

  const renderItems = () =>
    items.map((item, index) => (
      <div
        className={classes.item}
        key={item.title}
        onMouseEnter={() => setActive(index)}
      >
        {item.title}
      </div>
    ))

  return (
    <nav
      className={classes.nav}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={ref}
    >
      {renderItems()}

      <animated.div
        className={classes.popover}
        style={{
          width: popoverWidth,
          transform: contentSpring.x.to((val) =>
            transform(val, itemWidth, popoverWidth)
          ),
          height: contentSpring.height,
        }}
      >
        <div ref={contentRef}>{renderContent()}</div>
      </animated.div>
    </nav>
  )
}
