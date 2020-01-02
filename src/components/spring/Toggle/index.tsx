import React, { useState, useEffect } from 'react'

import GiftNotice from './gift-notice.svg'
import InfoNotice from './info-notice.svg'
import { useStyles } from './useStyles'
import { useTransition, animated } from 'react-spring'

export const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    setInterval(() => setToggle((prev) => !prev), 2000)
  }, [])

  const transitions = useTransition(toggle, null, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  })

  const renderAnimation = () =>
    transitions.map(({ item, key, props }) => (
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
