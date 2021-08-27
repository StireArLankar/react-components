import React from 'react'

import { motion, useCycle } from 'framer-motion'

import useStyles from './Animation.styles'

export const Cycle = () => {
  const classes = useStyles()

  const [x, cycleX] = useCycle(-100, 0, 100)

  return (
    <motion.div
      className={classes.box}
      animate={{ x: x }}
      onTap={() => cycleX()}
    />
  )
}
