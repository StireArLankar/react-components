import React from 'react'
import useStyles from './useStylesV2'
import clsx from 'clsx'

export const NeonButtonV2 = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { color?: string }
) => {
  const { className, color = '#03e9f4', children, ...rest } = props

  const classes = useStyles({ color })

  const btnClass = clsx(classes.button, className)

  return (
    <button {...rest} className={btnClass}>
      <span className={classes.text}>{children}</span>
    </button>
  )
}
