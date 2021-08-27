import React from 'react'

import { number, radios, text } from '@storybook/addon-knobs'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import Temp from '.'

export default {
  title: 'Spring/Button',
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

export const example = () => (
  <div
    style={{
      width: number('container width', 400),
      background: 'red',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Temp
      variant={radios('variant', { bold: 'bold', regular: 'regular' }, 'bold')}
      text={text('text', 'Hello world')}
    />
  </div>
)
