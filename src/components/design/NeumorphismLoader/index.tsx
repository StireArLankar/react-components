import { memo } from 'react'

import { assignInlineVars } from '@vanilla-extract/dynamic'

import classes, { iVar } from './_classes.css'

const array = Array.from({ length: 5 })

export default memo(() => (
  <div className={classes.wrapper}>
    {array.map((_, i) => (
      <div
        style={assignInlineVars({ [iVar]: `${i + 1}` })}
        className={classes.box}
        key={i}
      />
    ))}
  </div>
))
