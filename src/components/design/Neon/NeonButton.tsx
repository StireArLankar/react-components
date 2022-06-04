import { forwardRef } from 'react'

import clsx from 'clsx'

import classes from './_classes.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
}

export const NeonButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, color = '#03e9f4', children, ...rest } = props

  const btnClass = clsx(classes.button, className)

  return (
    <button {...rest} className={btnClass} style={{ color }} ref={ref}>
      <span className={classes.tail} />
      <span className={classes.tail} />
      <span className={classes.tail} />
      <span className={classes.tail} />
      <span className={classes.text}>{children}</span>
    </button>
  )
})
