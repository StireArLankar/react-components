import { memo } from 'react'

import classes from './styles'

export default memo(() => (
  <div className={classes.container()}>
    <div className={classes.box()}>
      <Svg />
      <Svg />
    </div>
  </div>
))

const Svg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 5'
    width='200'
    className={classes.root()}
  >
    <path
      d='M 1 4 A 1 1 0 0 1 7 4'
      strokeWidth='1'
      strokeLinecap='round'
      fill='none'
    />
  </svg>
)
