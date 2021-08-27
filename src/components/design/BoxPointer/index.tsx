import React from 'react'

import clsx from 'clsx'

import useStyles from './styles'

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.box, classes.bottom)}>bottom</div>
      <div className={clsx(classes.box, classes.left)}>left</div>
      <div className={clsx(classes.box, classes.right)}>right</div>
      <div className={clsx(classes.box, classes.top)}>top</div>
    </div>
  )
}
