import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LiquidButton } from '../../design/Liquid/LiquidButton'

import useStyles from './Animation.styles'

export const Animation = () => {
  const [count, setCount] = useState(0)

  const classes = useStyles()

  return (
    <>
      <LiquidButton
        onClick={() => setCount((p) => p + 1)}
        className={classes.button}
      />
      <motion.div
        animate={{ scale: 2 }}
        transition={{ duration: 0.5 }}
        key={count}
        className={classes.box}
      />
    </>
  )
}
