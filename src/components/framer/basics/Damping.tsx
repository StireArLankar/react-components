import { motion } from 'framer-motion'

import classes from './_classes.css'

export const Damping = () => (
  <motion.div
    animate={{ scale: 1.3 }}
    transition={{ damping: 0, type: 'spring' }}
    className={classes.box}
  />
)
