import { useState } from 'react'

import classes from './_classes.css'
import HeartPng from './web-heart-animation.png'

export const Heart = () => {
  const [open, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <div className={classes.container} onClick={toggle}>
      <div
        className={classes.heart({ open })}
        style={{ backgroundImage: `url(${HeartPng}` }}
      />
    </div>
  )
}
