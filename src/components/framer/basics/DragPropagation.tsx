import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { LiquidButton } from '../../design/Liquid/LiquidButton'

export const DragPropagation = () => {
  const isDragging = useRef(false)

  return (
    <motion.ul
      drag='x'
      style={{ display: 'grid', gridGap: 20, gridTemplateColumns: '1fr 1fr' }}
      dragConstraints={{ left: -200, right: 200 }}
      onDragStart={() => {
        isDragging.current = true
        console.log('start')
      }}
      onDragEnd={() => {
        setImmediate(() => {
          isDragging.current = false
          console.log('end')
        })
      }}
      onClickCapture={(e) => {
        console.log('capture')
        if (isDragging.current) {
          e.stopPropagation()
          e.nativeEvent.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
        }
      }}
    >
      <LiquidButton onClick={() => alert('click')}>Click me</LiquidButton>
      <LiquidButton onClick={() => alert('click')}>Click me</LiquidButton>
    </motion.ul>
  )
}
