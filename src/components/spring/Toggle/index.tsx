import { useState, useEffect } from 'react'

import { useTransition, animated } from '@react-spring/web'

import classes from './_classes.css'
import GiftNotice from './gift-notice.svg'
import InfoNotice from './info-notice.svg'

export const Toggle = () => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setToggle((prev) => !prev), 2000)
    return () => clearInterval(interval)
  }, [])

  const transitions = useTransition(toggle, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -10 },
  })

  const renderAnimation = () =>
    transitions((props, item, _, key) => (
      <animated.img
        alt='info-notice'
        className={classes.img}
        key={`info-notice-${key}`}
        src={item ? InfoNotice : GiftNotice}
        style={props}
      />
    ))

  return <div className={classes.wrapper}>{renderAnimation()}</div>
}

export default Toggle
