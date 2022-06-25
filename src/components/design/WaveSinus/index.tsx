import { memo } from 'react'

import classes, { size } from './_classes.css'

const array = Array.from({ length: 20 })

export default memo(() => {
  const renderInner = () =>
    array.map((_, i) => (
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
          style={{ animationDelay: `${i * 0.15 + 0.55}s` }}
        />
      </div>
    ))

  return <div className={classes.wrapper}>{renderInner()}</div>
})
