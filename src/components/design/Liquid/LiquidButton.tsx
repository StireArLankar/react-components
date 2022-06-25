import type { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

import classes from './_classes.css'

export interface LiquidButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const LiquidButton = ({ children, ...rest }: LiquidButtonProps) => (
  <button {...rest} className={clsx(classes.button, rest.className)}>
    <span className={classes.text}>{children}</span>
    <div className={classes.liquid} />
  </button>
)
