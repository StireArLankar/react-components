import React, { useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { LiquidButton } from 'components/design/Liquid/LiquidButton'

const style = { padding: 20, width: 300, background: 'teal' }

// This component will animate between sizes when `isVisible` is toggled.
export const Autosize = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimateSharedLayout>
      <motion.div style={style} animate>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              style={{ background: 'red', willChange: 'opacity' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key='modal'
            >
              Hello world
              <div>asd</div>
              <div>asd</div>
              <div>asd</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  )
}

export const AutoSizeWrapper = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <LiquidButton onClick={() => setIsVisible((prev) => !prev)} />
      <div style={{ width: 50 }} />
      <Autosize isVisible={isVisible} />
    </div>
  )
}
