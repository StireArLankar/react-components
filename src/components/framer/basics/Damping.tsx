import React from 'react'

import { motion } from 'framer-motion'

import useStyles from './Animation.styles'

export const Damping = () => {
  const classes = useStyles()

  return (
    <motion.div
      animate={{ scale: 1.3 }}
      transition={{ damping: 0, type: 'spring' }}
      className={classes.box}
    />
  )
}
