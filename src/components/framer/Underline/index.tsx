import { useState } from 'react'

import { motion, AnimateSharedLayout } from 'framer-motion'

import classes from './_classes.css'

const screens = [
  { title: 'One', color: '#ff0055' },
  { title: 'Two', color: '#0099ff' },
  { title: 'Threeeee', color: '#22cc88' },
  { title: 'Four', color: '#ffaa00' },
]

export default () => {
  const [selected, setSelected] = useState(0)

  return (
    <AnimateSharedLayout>
      <ol className={classes.list}>
        {screens.map(({ title, color }, i) => (
          <motion.li
            key={i}
            animate
            className={classes.title({ selected: i === selected })}
            style={{ color: i === selected ? color : '#333' }}
            onClick={() => setSelected(i)}
          >
            {i === selected && (
              <motion.div
                layoutId='_'
                className={classes.underline}
                style={{ backgroundColor: color }}
              />
            )}
            {title}
          </motion.li>
        ))}
      </ol>
    </AnimateSharedLayout>
  )
}
