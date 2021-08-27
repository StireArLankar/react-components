import React, { forwardRef } from 'react'

import clsx from 'clsx'

import useStyles from './useStyles'

interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  (props, ref) => {
    const { className, color = '#03e9f4', children, ...rest } = props

    const classes = useStyles({ color })

    const btnClass = clsx(classes.button, className)

    return (
      <button {...rest} className={btnClass} ref={ref}>
        <span className={classes.tail} />
        <span className={classes.tail} />
        <span className={classes.tail} />
        <span className={classes.tail} />
        <span className={classes.text}>{children}</span>
      </button>
    )
  }
)
