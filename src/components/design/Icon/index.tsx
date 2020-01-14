import React from 'react'
import useStyles from './useStyles'
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon'

export interface IconProps {
  Icon: (props: SvgIconProps) => JSX.Element
}

export const Icon = (props: IconProps) => {
  const { Icon } = props
  const classes = useStyles()

  return (
    <button className={classes.button}>
      <Icon className={classes.icon} />
    </button>
  )
}
