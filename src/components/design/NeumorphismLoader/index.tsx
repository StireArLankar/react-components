import React, { memo } from 'react'

import useStyles from './styles'

export default memo(() => {
  const classes = useStyles()

  const renderBars = () =>
    Array.from({ length: 5 }).map((_, i) => (
      <div style={{ ['--i' as any]: i + 1 }} className={classes.box} key={i} />
    ))

  return <div className={classes.wrapper}>{renderBars()}</div>
})
