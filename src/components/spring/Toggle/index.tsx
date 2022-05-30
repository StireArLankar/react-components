import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

import GiftNotice from './gift-notice.svg'
import InfoNotice from './info-notice.svg'
import { useStyles } from './useStyles'

export const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    const interval = setInterval(() => setToggle((prev) => !prev), 2000)
    return () => clearInterval(interval)
  }, [])

  const transitions = useTransition(toggle, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  })

  const renderAnimation = () =>
    transitions((props, item, _, key) => (
      <animated.img
        alt={'info-notice'}
        className={classes.img}
        key={`info-notice-${key}`}
        src={item ? InfoNotice : GiftNotice}
        style={props}
      />
    ))

  return <div className={classes.wrapper}>{renderAnimation()}</div>
}

export default Toggle
