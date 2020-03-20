import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LiquidButton } from '../../design/Liquid/LiquidButton'

import useStyles from './Animation.styles'

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

// This component will animate items to their new position if its place in `items` changes order.
export const MyComponent2 = ({ items }: { items: Array<{ id: string }> }) => {
  const classes = useStyles()

  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 30 }}
    >
      {items.map((item) => (
        <motion.div
          className={classes.box}
          key={item.id}
          style={{ background: item.id === '1' ? 'teal' : 'pink' }}
          positionTransition={spring}
        />
      ))}
    </div>
  )
}

export const OrderTransition = () => {
  const [items, setItems] = useState([{ id: '1' }, { id: '2' }])

  const onClick = () => setItems((prev) => prev.slice().reverse())

  return (
    <>
      <LiquidButton onClick={onClick} />
      <MyComponent2 items={items} />
    </>
  )
}
