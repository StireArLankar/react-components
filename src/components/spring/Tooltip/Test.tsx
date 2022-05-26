import React, { useState } from 'react'

import { Tooltip } from './Tooltip'

import { LiquidButton } from '~/components/design/Liquid/LiquidButton'

export const Test = (props: { position: 'top' | 'bottom' }) => {
  const { position = 'top' } = props
  const [isOpen, setIsOpen] = useState(false)

  const onMouseLeave = () => setIsOpen(false)
  const onMouseEnter = () => setIsOpen(true)

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <LiquidButton>Open tooltip</LiquidButton>
      <Tooltip isOpen={isOpen} position={position}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          debitis eius. Quaerat, quas natus nostrum similique, deserunt
          laudantium velit veritatis sed dolores pariatur odit architecto totam
          culpa, porro magni omnis?
        </div>
      </Tooltip>
    </div>
  )
}
