import React from 'react'

import { motion, useDragControls } from 'framer-motion'

import useStyles from './Animation.styles'

export const Drag = () => {
  const classes = useStyles()

  return (
    <motion.div
      drag
      className={classes.box}
      dragConstraints={{ left: -100, right: 100, bottom: 100, top: -100 }}
    />
  )
}

export const DragAxis = () => {
  const classes = useStyles()

  return <motion.div drag dragDirectionLock className={classes.box} />
}

export const DragElastic = () => {
  const classes = useStyles()

  return (
    <motion.div
      drag
      className={classes.box}
      dragElastic={0.1}
      dragConstraints={{ left: -100, right: 100, bottom: 100, top: -100 }}
    />
  )
}

export const DragNoMomentum = () => {
  const classes = useStyles()

  return <motion.div drag className={classes.box} dragMomentum={false} />
}

export const DragControls = () => {
  const classes = useStyles()
  const dragControls = useDragControls()

  const startDrag = (evt: any) => {
    dragControls.start(evt, { snapToCursor: true })
  }

  return (
    <>
      <div
        onMouseDown={startDrag}
        style={{ width: 200, height: 20, backgroundColor: 'red' }}
      />
      <motion.div
        drag='x'
        dragControls={dragControls}
        className={classes.box}
      />
    </>
  )
}
