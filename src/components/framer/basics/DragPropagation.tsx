import React, { useRef } from 'react'

import { LiquidButton } from 'components/design/Liquid/LiquidButton'
import { motion } from 'framer-motion'

import useStyles from './Animation.styles'

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

export const DragRefConstrains = () => {
  const ref = useRef<HTMLDivElement>(null)

  const classes = useStyles()

  return (
    <div
      ref={ref}
      style={{
        width: 600,
        overflow: 'hidden',
        border: '2px solid pink',
        borderRadius: 40,
      }}
    >
      <motion.ul
        drag='x'
        style={{
          display: 'grid',
          gridGap: 20,
          gridTemplateColumns: '1fr 1fr',
          width: 'max-content',
          padding: 10,
          margin: 0,
        }}
        dragConstraints={ref}
      >
        <div className={classes.box} />
        <div className={classes.box} />
      </motion.ul>
    </div>
  )
}
