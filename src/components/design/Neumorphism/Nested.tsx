import React from 'react'

import useStyles from './useStyles'

export const NestedNeumorphism = () => {
  const classes = useStyles()

  return (
    <div className={classes.nestedContainer}>
      <div className={classes.nestedItem} />
    </div>
  )
}
