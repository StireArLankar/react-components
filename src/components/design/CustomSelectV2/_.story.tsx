import React, { useEffect, useState } from 'react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Combobox } from './multi'

import Temp from '.'

export default {
  title: 'Design/CustomSelectV2',
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

const options = Array.from({ length: 100 }, (_, i) => ({
  label: `Option ${i}`,
  value: `${i}`,
}))

const Controlled = () => {
  const [value, setValue] = useState('1')

  useEffect(() => {
    document.body.style.padding = '0'
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gridGap: 10,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: 20,
          margin: '0 auto',
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        <Temp
          value={value}
          onChange={setValue}
          items={options}
          fixedContainer
        />
      </div>

      <a href='#11'>for accessible</a>
      <Temp value={value} onChange={setValue} items={options} />

      <a href='#11'>for accessible</a>

      <div
        style={{
          position: 'fixed',
          bottom: 20,
          margin: '0 auto',
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        <Temp
          value={value}
          onChange={setValue}
          items={options}
          fixedContainer
        />
      </div>
    </div>
  )
}

export const ExampleV2 = () => <Controlled />

const items = ['132', '229', '9993', '0934'].map((value) => ({
  value,
  label: value,
}))

const MultiTest = () => {
  const [values, set] = useState([''])
  return (
    <div style={{ minWidth: 200 }}>
      <Combobox values={values} onChange={set} items={items} />
    </div>
  )
}

export const Multi = () => <MultiTest />
