import React from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon'

import useStyles from './useStyles'

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
