import { useEffect, useState } from 'react'

import { motion, Variants } from 'framer-motion'

import classes from './styles'

type Props = { helperText?: string }

const helperVariants: Variants = {
  show: {
    height: 33,
    transition: {
      delayChildren: 0.1,
    },
  },
  hide: { height: 0 },
}

const helperTextVariants: Variants = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
}

const Component = ({ helperText }: Props) => {
  const [state, setState] = useState(helperText)

  useEffect(() => {
    helperText && setState(helperText)
  }, [helperText])

  return (
    <motion.div
      className={classes.helperWrapper()}
      variants={helperVariants}
      initial={helperText ? 'show' : 'hide'}
      animate={helperText ? 'show' : 'hide'}
    >
      <div style={{ height: 4 }} />
      <div className={classes.helper()}>
        <motion.span variants={helperTextVariants}>{state}</motion.span>
      </div>
    </motion.div>
  )
}

export default Component
