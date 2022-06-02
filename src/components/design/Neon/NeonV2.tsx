import clsx from 'clsx'

import classes from './_classesV2.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { color?: string }
export const NeonButtonV2 = (props: Props) => {
  const { className, color = '#03e9f4', children, ...rest } = props

  const btnClass = clsx(classes.button, className)

  return (
    <button {...rest} className={btnClass} style={{ color }}>
      <span className={classes.text}>{children}</span>
    </button>
  )
}
