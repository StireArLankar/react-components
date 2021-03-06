import React from 'react'
import clsx from 'clsx'
import useStyles from './useStyles'

export interface NeumorphismProps {
  isActive?: boolean
}

export const Neumorphism = (props: NeumorphismProps) => {
  const { isActive: active } = props
  const classes = useStyles()

  const wrapperClass = clsx({
    [classes.wrapper]: true,
    active,
  })

  return <div className={wrapperClass} />
}
