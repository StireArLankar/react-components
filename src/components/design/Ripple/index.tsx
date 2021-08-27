import React, { PropsWithChildren, useState } from 'react'

import clsx from 'clsx'

import useStyles from './Ripple.styles'

export interface RippleProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  secondary?: boolean
}

export const Ripple = (props: PropsWithChildren<RippleProps>) => {
  const { children, onClick, secondary, className, ...rest } = props

  const classes = useStyles()

  const [ripples, setRipples] = useState<[number, number, number][]>([])

  const onButtonClick = (e: any) => {
    onClick && onClick(e)
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    setRipples((prev) => [...prev, [x, y, Date.now()]])
    setTimeout(() => setRipples((prev) => prev.slice(1)), 1000)
  }

  const buttonClass = clsx(
    classes.button,
    secondary && classes.secondary,
    className
  )

  return (
    <button {...rest} onClick={onButtonClick} className={buttonClass}>
      {ripples.map((ripple) => (
        <span
          key={ripple[2]}
          className={classes.ripple}
          style={{ left: ripple[0], top: ripple[1] }}
        />
      ))}
      {children}
    </button>
  )
}
