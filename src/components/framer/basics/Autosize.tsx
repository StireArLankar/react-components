import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LiquidButton } from '../../design/Liquid/LiquidButton'

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

// This component will animate between sizes when `isVisible` is toggled.
export const Autosize = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      style={{ padding: 20, width: 300, background: 'teal' }}
      layoutTransition={spring}
    >
      {isVisible && (
        <div style={{ background: 'red', height: 50 }}>Hello world</div>
      )}
    </motion.div>
  )
}

export const AutoSizeWrapper = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <LiquidButton onClick={() => setIsVisible((prev) => !prev)} />
      <Autosize isVisible={isVisible} />
    </>
  )
}
