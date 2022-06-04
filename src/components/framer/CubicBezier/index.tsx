import { useRef, useEffect, useCallback, memo, useState } from 'react'

import { motion, useMotionValue, MotionValue } from 'framer-motion'

import classes from './_classes.css'

const t = (val: MotionValue<number>) => val.get().toFixed(0)

export default memo(() => {
  // fixing strange constrains calculations
  const [, setState] = useState(0)
  useEffect(() => void setState(1), [])

  const constraintsRef1 = useRef(null)
  const constraintsRef2 = useRef(null)

  const x1 = useMotionValue(0)
  const y1 = useMotionValue(500)

  const x2 = useMotionValue(100)
  const y2 = useMotionValue(400)

  const x3 = useMotionValue(400)
  const y3 = useMotionValue(100)

  const x4 = useMotionValue(500)
  const y4 = useMotionValue(0)

  const path = useMotionValue(``)
  const path1 = useMotionValue(``)
  const path2 = useMotionValue(``)

  const _content = useRef<HTMLDivElement>(null)

  const updatePath = useCallback(() => {
    const newPath = `M${x1.get()},${y1.get()} C${x2.get()},${y2.get()} ${x3.get()},${y3.get()} ${x4.get()},${y4.get()}`
    path.set(newPath)
    _content.current!.innerText = `M${t(x1)},${t(y1)} C${t(x2)},${t(y2)} ${t(
      x3
    )},${t(y3)} ${t(x4)},${t(y4)}`
  }, [path, x1, x2, x3, x4, y1, y2, y3, y4])

  const updatePath1 = useCallback(() => {
    const newPath = `M${x1.get()},${y1.get()} L${x2.get()},${y2.get()}`
    path1.set(newPath)
  }, [path1, x1, x2, y1, y2])

  const updatePath2 = useCallback(() => {
    const newPath = `M${x4.get()},${y4.get()} L${x3.get()},${y3.get()}`
    path2.set(newPath)
  }, [path2, x3, x4, y3, y4])

  useEffect(() => {
    updatePath()
    updatePath1()
    updatePath2()
  }, [updatePath, updatePath1, updatePath2])

  const renderPoint = (
    update: () => void,
    x: MotionValue<number>,
    y: MotionValue<number>,
    inner?: boolean
  ) => (
    <motion.circle
      onUpdate={() => {
        update()
        updatePath()
      }}
      cx={0}
      cy={0}
      r={10}
      style={{ x, y }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={inner ? constraintsRef1 : constraintsRef2}
      stroke='none'
      fill='red'
    />
  )

  return (
    <div className={classes.wrapper}>
      <motion.div ref={_content} className={classes.content} />

      <div className={classes.constrains} ref={constraintsRef1} />

      <svg
        viewBox='-100 -100 700 700'
        className={classes.svg}
        ref={constraintsRef2}
        fill='none'
      >
        <motion.path d={path} stroke='black' strokeWidth='1' />
        <motion.path d={path1} stroke='blue' strokeWidth='1' />
        <motion.path d={path2} stroke='blue' strokeWidth='1' />
        {renderPoint(updatePath1, x1, y1, true)}
        {renderPoint(updatePath1, x2, y2)}
        {renderPoint(updatePath2, x3, y3)}
        {renderPoint(updatePath2, x4, y4, true)}
      </svg>
    </div>
  )
})
