import React, { useState } from 'react'

import { PopupWithAnchor } from '.'

import { NeonButton } from '~/components/design/Neon/NeonButton'

export const Test = (props: { position: 'top' | 'bottom'; temp?: boolean }) => {
  const { position = 'top', temp } = props
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  return (
    <div
      style={{
        position: 'relative',
        left: `${temp ? -50 : 50}px`,
      }}
    >
      <NeonButton onClick={onOpen}>
        Open popup
        <PopupWithAnchor isOpen={isOpen} onClose={onClose} position={position}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            debitis eius. Quaerat, quas natus nostrum similique, deserunt
            laudantium velit veritatis sed dolores pariatur odit architecto
            totam culpa, porro magni omnis?
          </div>
        </PopupWithAnchor>
      </NeonButton>
    </div>
  )
}
