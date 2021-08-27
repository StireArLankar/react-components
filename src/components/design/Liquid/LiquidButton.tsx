import React, { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

import { useStyles } from './useStyles'

export interface LiquidButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const LiquidButton = (props: LiquidButtonProps) => {
  const { className, children, ...rest } = props
  const classes = useStyles()

  const buttonClass = clsx(classes.button, className)

  return (
    <button {...rest} className={buttonClass}>
      <span className={classes.text}>{children}</span>
      <div className={classes.liquid} />
    </button>
  )
}
