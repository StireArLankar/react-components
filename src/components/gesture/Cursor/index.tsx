import React, { useState, useEffect } from 'react'

import { useStyles } from './useStyles'
import { useMove } from 'react-use-gesture'
import { useSpring, animated, interpolate } from 'react-spring'
import clsx from 'clsx'

export const Cursor = () => {
  const classes = useStyles()

  const [active, setActive] = useState('')

  const [{ x, y, s }, set] = useSpring(() => ({ x: -100, y: -100, s: 0 }))

  const bind = useMove(
    ({ xy: [x, y] }) => {
      set({ x, y, s: active ? 1 : 0 })
    },
    { domTarget: window }
  )

  useEffect(() => {
    bind()
  }, [bind])

  const onMouseEnter = (item: string) => () => setActive(item)
  const onMouseLeave = () => setActive('')

  const renderItems = () =>
    ['Home', 'Contact', 'Services'].map((item) => (
      <li
        className={clsx(classes.navItem, item === active && classes.active)}
        onMouseEnter={onMouseEnter(item)}
        onMouseLeave={onMouseLeave}
        key={item}
      >
        {item}
      </li>
    ))

  return (
    <div className={classes.wrapper}>
      <animated.div
        className={classes.cursor}
        style={{
          transform: interpolate(
            [x, y, s],
            (x, y, s) => `translate(${x}px, ${y}px) scale(${s + 1})`
          ),
          background: s.interpolate((s) => `rgba(0, 0, 0, ${s})`),
        }}
      />
      <ul className={classes.nav}>{renderItems()}</ul>

      <div className={classes.section}>
        <div className={classes.imgWrapper}>
          <img
            className={classes.img}
            src='https://images.alphacoders.com/720/thumb-1920-720915.png'
            alt='Nepu'
          />
        </div>
      </div>
    </div>
  )
}
