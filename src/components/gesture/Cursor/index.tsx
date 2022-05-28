import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import { useMove } from '@use-gesture/react'

import classes from './classes'

export const Cursor = () => {
  const [active, setActive] = useState('')

  const [styles, spring] = useSpring(() => ({ x: -100, y: -100, scale: 1 }))

  useMove(
    ({ xy: [x, y] }) => void spring.start({ x, y, scale: active ? 2 : 1 }),
    { target: window }
  )

  const onMouseEnter = (item: string) => () => setActive(item)
  const onMouseLeave = () => setActive('')

  const renderItems = () =>
    ['Home', 'Contact', 'Services'].map((item) => (
      <li
        className={classes.navItem({ active: item === active })}
        onMouseEnter={onMouseEnter(item)}
        onMouseLeave={onMouseLeave}
        key={item}
      >
        {item}
      </li>
    ))

  return (
    <div className={classes.wrapper()}>
      <animated.div
        className={classes.cursor()}
        style={{
          ...styles,
          background: styles.scale.to((s) => `rgba(0, 0, 0, ${s - 1})`),
        }}
      />

      <ul className={classes.nav()}>{renderItems()}</ul>

      <div className={classes.section()}>
        <div className={classes.imgWrapper()}>
          <img
            className={classes.img()}
            src='https://images.alphacoders.com/720/thumb-1920-720915.png'
            alt='Nepu'
          />
        </div>
      </div>
    </div>
  )
}
