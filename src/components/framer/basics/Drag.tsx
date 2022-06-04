import { motion, useDragControls } from 'framer-motion'

import classes from './_classes.css'

export const Drag = () => (
  <motion.div
    drag
    className={classes.box}
    dragConstraints={{ left: -100, right: 100, bottom: 100, top: -100 }}
  />
)

export const DragAxis = () => (
  <motion.div drag dragDirectionLock className={classes.box} />
)

export const DragElastic = () => (
  <motion.div
    drag
    className={classes.box}
    dragElastic={0.1}
    dragConstraints={{ left: -100, right: 100, bottom: 100, top: -100 }}
  />
)

export const DragNoMomentum = () => (
  <motion.div drag className={classes.box} dragMomentum={false} />
)

export const DragControls = () => {
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
