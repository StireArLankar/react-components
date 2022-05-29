import { useState } from 'react'

import classes from './classes'
import HeartPng from './web-heart-animation.png'

export const Heart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <div className={classes.container()} onClick={toggle}>
      <div
        className={classes.heart({ open: isOpen })}
        style={{ backgroundImage: `url(${HeartPng}` }}
      />
    </div>
  )
}
