import React, { useState } from 'react'
import { withCustomTheme } from '_storybook/withCustomTheme'
import { withCenteredStyle } from '_storybook/withCenteredStyle'

import Temp from '.'

export default {
  title: 'Design/CustomSelect',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'teal',
      minHeight: `160vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}

const options = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
  {
    label: 'Option 3',
    value: '3',
  },
  {
    label: 'Option 4',
    value: '4',
  },
  {
    label: 'Option 5',
    value: '5',
  },
]

const Controlled = () => {
  const [value, setValue] = useState('1')

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gridGap: 10,
        alignItems: 'center',
      }}
    >
      <a href='#11'>for accessible</a>
      <Temp value={value} onChange={setValue} items={options} />

      <a href='#11'>for accessible</a>

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          margin: '0 auto',
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        <Temp value={value} onChange={setValue} items={options} />
      </div>
    </div>
  )
}

export const example = () => <Controlled />
