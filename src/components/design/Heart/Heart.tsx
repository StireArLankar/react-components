import React, { useState } from 'react'

import clsx from 'clsx'

import useStyles from './useStyles'
import HeartPng from './web-heart-animation.png'

export const Heart = () => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((prev) => !prev)

  const heartClass = clsx({
    [classes.heart]: true,
    [classes.animation]: isOpen,
  })

  return (
    <div className={classes.container} onClick={toggle}>
      <div
        className={heartClass}
        style={{
          backgroundImage: `url(${HeartPng}`,
        }}
      />
    </div>
  )
}
