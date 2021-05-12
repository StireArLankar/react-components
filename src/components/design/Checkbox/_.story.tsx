import React, { useState } from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'

import Temp from '.'

export default {
  title: 'Design/Checkbox',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'teal',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}

const Controlled = () => {
  const [value, setValue] = useState(true)

  const err = boolean('error', false)

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
      <Temp
        id='tmep'
        value={value}
        label={text('label', 'label')}
        onChange={() => setValue((prev) => !prev)}
        error={err}
        helperText={err ? text('helper', 'helper') : ''}
      />
      <a href='#11'>for accessible</a>
    </div>
  )
}

export const example = () => <Controlled />
