import { useState, useRef } from 'react'

import { motion } from 'framer-motion'

import classes from './_classes.css'

const screens = [
  { title: 'One', color: '#ff0055' },
  { title: 'Two', color: '#0099ff' },
  { title: 'Threeeee', color: '#22cc88' },
  { title: 'Four', color: '#ffaa00' },
]

export default () => {
  const [selected, setSelected] = useState(0)

  const prevColor = useRef('#ff0055')

  return (
    <ol className={classes.list}>
      {screens.map(({ title, color }, i) => (
        <motion.li
          key={i}
          animate={{
            fontSize: i === selected ? '64px' : '32px',
            color: i === selected ? color : '#333',
          }}
          className={classes.title({ selected: i === selected })}
          onClick={() => {
            prevColor.current = screens[selected].color
            setSelected(i)
          }}
          transition={{ duration: 0.5 }}
        >
          {i === selected && (
            <motion.div
              layoutId='_'
              className={classes.underline}
              animate={{ backgroundColor: color }}
              transition={{ duration: 0.5 }}
              initial={{ backgroundColor: prevColor.current }}
            />
          )}
          {title}
        </motion.li>
      ))}
    </ol>
  )
}
