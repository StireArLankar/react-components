import React from 'react'

import { motion, useMotionValue, useTransform } from 'framer-motion'

import useStyles from './Animation.styles'

export const MotionValue = () => {
  const x = useMotionValue(0)
  const input = [-200, 0, 200]
  const output = [0, 1, 0]
  const opacity = useTransform(x, input, output)

  const classes = useStyles()

  return (
    <motion.div
      className={classes.box}
      drag='x'
      style={{ x, opacity }}
      dragConstraints={{ left: -100, right: 100 }}
      dragElastic={0.3}
    />
  )
}
