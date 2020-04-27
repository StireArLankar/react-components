import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { LiquidButton } from '../../design/Liquid/LiquidButton'

import useStyles from './Animation.styles'

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

// This component will animate position when `isOpen` is toggled.
export const MyComponent1 = ({ isOpen }: { isOpen: boolean }) => {
  const classes = useStyles()

  return (
    <motion.div
      transition={spring}
      animate
      className={classes.box}
      style={{
        left: isOpen ? 100 : 200,
        top: isOpen ? 150 : 100,
        position: 'absolute',
      }}
    />
  )
}

export const PositionTransition = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <LiquidButton onClick={() => setIsOpen((prev) => !prev)} />
      <MyComponent1 isOpen={isOpen} />
    </>
  )
}
