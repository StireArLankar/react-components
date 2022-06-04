import { useState } from 'react'

import { motion, Variants } from 'framer-motion'

import classes from './_classes.css'

import { LiquidButton } from '~/components/design/Liquid/LiquidButton'

const list: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const items = {
  visible: { scale: 0.5, x: 0 },
  hidden: { scale: 1, x: -100 },
}

export const StaggerVariants = () => {
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
        variants={list}
        key={count}
      >
        <motion.div
          variants={items}
          className={classes.box}
          style={{ background: 'teal' }}
        />
        <motion.div
          variants={items}
          className={classes.box}
          style={{ background: 'pink' }}
        />
      </motion.div>
    </>
  )
}
