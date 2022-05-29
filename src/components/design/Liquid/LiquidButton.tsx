import { ButtonHTMLAttributes } from 'react'

import classes from './classes'

export interface LiquidButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const LiquidButton = ({ children, ...rest }: LiquidButtonProps) => (
  <classes.Button {...rest}>
    <span className={classes.text()}>{children}</span>
    <div className={classes.liquid()} />
  </classes.Button>
)
