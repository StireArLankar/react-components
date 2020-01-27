import React from 'react'
import useStyles from './useStyles'
import clsx from 'clsx'

export const NeonButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { color?: string }
) => {
  const { className, color = '#03e9f4', children, ...rest } = props

  const classes = useStyles({ color })

  const btnClass = clsx(classes.button, className)

  return (
    <button {...rest} className={btnClass}>
      <span className={classes.tail} />
      <span className={classes.tail} />
      <span className={classes.tail} />
      <span className={classes.tail} />
      <span className={classes.text}>{children}</span>
    </button>
  )
}
