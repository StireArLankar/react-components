import { useState } from 'react'

import { motion } from 'framer-motion'

import classes from './_classes.css'

import { LiquidButton } from '~/components/design/Liquid/LiquidButton'

const variants = {
  visible: { opacity: 1, scale: 0.5 },
  hidden: { opacity: 0, scale: 1 },
}

export const Variants = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <LiquidButton
        onClick={() => setCount((p) => p + 1)}
        className={classes.button}
      />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        key={count}
        className={classes.box}
      />
    </>
  )
}

const variants2 = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const nestedVariants = {
  visible: { scale: 0.5, x: 0 },
  hidden: { scale: 1, x: -100 },
}

export const NestedVariants = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <LiquidButton
        onClick={() => setCount((p) => p + 1)}
        className={classes.button}
      />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants2}
        key={count}
      >
        <motion.div variants={nestedVariants} className={classes.box} />
        <motion.div variants={nestedVariants} className={classes.box} />
      </motion.div>
    </>
  )
}
