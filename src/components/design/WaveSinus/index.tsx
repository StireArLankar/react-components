import React, { memo } from 'react'

import useStyles, { size } from './styles'

export default memo(() => {
  const classes = useStyles()

  const renderInner = () =>
    Array.from({ length: 20 }, (_, i) => i).map((i) => (
      <div
        key={i}
        className={classes.bar}
        style={{
          left: i * (size / 10 + (size / 15 - size / 100)),
          animationDelay: `${i * 0.15}s`,
        }}
      >
        <div
          className={classes.barInner}
          style={{
            animationDelay: `${i * 0.15 + 0.55}s`,
          }}
        />
      </div>
    ))

  return <div className={classes.wrapper}>{renderInner()}</div>
})
