import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LiquidButton } from 'components/design/Liquid/LiquidButton'

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

export const AnimationV2 = () => {
  const [count, setCount] = useState(0)

  const classes = useStyles()

  return (
    <>
      <LiquidButton
        onClick={() => setCount((p) => p + 1)}
        className={classes.button}
      />
      <motion.div
        animate={{
          backgroundColor: '#00ffff',
          boxShadow: '10px 10px 0 rgba(255, 255, 255, 0.2)',
          borderRadius: 40,
          transitionEnd: {
            display: 'none',
          },
        }}
        transition={{ duration: 1 }}
        key={count}
        className={classes.box}
      />
    </>
  )
}
