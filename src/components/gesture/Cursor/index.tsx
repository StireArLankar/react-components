import React, { useState } from 'react'
import { useSpring, animated, to } from 'react-spring'

import { useMove } from '@use-gesture/react'
import clsx from 'clsx'

import { useStyles } from './useStyles'

export const Cursor = () => {
  const classes = useStyles()

  const [active, setActive] = useState('')

  const [{ x, y, s }, set] = useSpring(() => ({ x: -100, y: -100, s: 0 }))

  useMove(
    ({ xy: [x, y] }) => {
      set({ x, y, s: active ? 1 : 0 })
    },
    // FIXME
    { target: window }
  )

  // useEffect(() => {
  //   bind()
  // }, [bind])

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
          transform: to(
            [x, y, s],
            (x, y, s) => `translate(${x}px, ${y}px) scale(${s + 1})`
          ),
          background: s.to((s) => `rgba(0, 0, 0, ${s})`),
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
