import { useState } from 'react'

import { motion, Transition } from 'framer-motion'

import classes from './_classes.css'

import { LiquidButton } from '~/components/design/Liquid/LiquidButton'

const spring: Transition = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

// This component will animate position when `isOpen` is toggled.
export const MyComponent1 = ({ isOpen }: { isOpen: boolean }) => (
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

export const PositionTransition = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <LiquidButton onClick={() => setIsOpen((prev) => !prev)} />
      <MyComponent1 isOpen={isOpen} />
    </>
  )
}
