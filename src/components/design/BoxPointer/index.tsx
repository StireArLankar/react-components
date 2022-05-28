import { memo } from 'react'

import classes from './styles'

export default memo(() => (
  <div className={classes.wrapper()}>
    <div className={classes.box({ side: 'bottom' })}>bottom</div>
    <div className={classes.box({ side: 'left' })}>left</div>
    <div className={classes.box({ side: 'right' })}>right</div>
    <div className={classes.box({ side: 'top' })}>top</div>
  </div>
))
