import React, { useState } from 'react'
import { Popup } from './Popup'
import { NeonButton } from '../../design/Neon/NeonButton'

export const Test = (props: { position: 'top' | 'bottom' }) => {
  const { position = 'top' } = props
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }
  const onOpen = () => setIsOpen(true)

  return (
    <div style={{ position: 'relative' }}>
      <NeonButton onClick={onOpen}>Open popup</NeonButton>
      <Popup isOpen={isOpen} onClose={onClose} position={position}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          debitis eius. Quaerat, quas natus nostrum similique, deserunt
          laudantium velit veritatis sed dolores pariatur odit architecto totam
          culpa, porro magni omnis?
        </div>
      </Popup>
    </div>
  )
}
