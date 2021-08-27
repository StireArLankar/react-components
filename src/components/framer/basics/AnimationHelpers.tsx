import React from 'react'

import { motion } from 'framer-motion'

import useStyles from './Animation.styles'

export const AnimationHelpers = () => {
  const classes = useStyles()

  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      className={classes.box}
    />
  )
}

const wrapperVariants = {
  tap: {
    scale: 0.9,
  },
  hover: {
    scale: 1.2,
  },
  initial: {
    scale: 1,
  },
}

const itemVariants = {
  tap: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  hover: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
  },
  initial: {
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
  },
}

export const AnimationHelpersVariants = () => {
  const classes = useStyles()

  return (
    <motion.div
      whileHover='hover'
      whileTap='tap'
      variants={wrapperVariants}
      initial='initial'
    >
      <motion.div className={classes.box} variants={itemVariants} />
    </motion.div>
  )
}
