import { motion, useCycle } from 'framer-motion'

import classes from './_classes.css'

export const Cycle = () => {
  const [x, cycleX] = useCycle(-100, 0, 100)

  return (
    <motion.div
      className={classes.box}
      animate={{ x }}
      onTap={() => cycleX()}
    />
  )
}
