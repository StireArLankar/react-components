import { useState } from 'react'

import { motion } from 'framer-motion'

import { LiquidButton } from '~/components/design/Liquid/LiquidButton'
import classes from '~/components/framer/basics/_classes.css'

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

// This component will animate items to their new position if its place in `items` changes order.
export const MyComponent2 = ({ items }: { items: Array<{ id: string }> }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 30 }}>
    {items.map((item) => (
      <motion.div
        className={classes.box}
        key={item.id}
        animate={{ background: item.id === '1' ? 'teal' : 'pink' }}
        transition={spring}
        layout
      />
    ))}
  </div>
)

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
