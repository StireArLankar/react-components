import React, { memo } from 'react'

import useStyles from './styles'

export default memo(() => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <Svg />
        <Svg />
      </div>
    </div>
  )
})

const Svg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 5'
    width='200'
    className={useStyles().root}
  >
    <path
      d='M 1 4 A 1 1 0 0 1 7 4'
      stroke-width='1'
      stroke-linecap='round'
      fill='none'
    />
  </svg>
)
