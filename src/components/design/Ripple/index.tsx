import { PropsWithChildren, useState } from 'react'

import clsx from 'clsx'

import classes, { Variants } from './_classes.css'

export type RippleProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  Variants

export const Ripple = (props: PropsWithChildren<RippleProps>) => {
  const { children, onClick, variant, className, ...rest } = props

  const [ripples, setRipples] = useState<[number, number, number][]>([])

  const onButtonClick = (e: any) => {
    onClick && onClick(e)
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    setRipples((prev) => [...prev, [x, y, Date.now()]])
    setTimeout(() => setRipples((prev) => prev.slice(1)), 1000)
  }

  const buttonClass = clsx(classes.button({ variant }), className)

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
