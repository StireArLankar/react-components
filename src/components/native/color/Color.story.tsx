import React from 'react'
import { Color } from '.'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { ColorDisplay, ColorDisplayProps } from './ColorDisplay'
import { number } from '@storybook/addon-knobs'

export default {
  title: 'Native|Color Picker',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20 }),
    withCustomTheme,
  ],
}

export const colorPicker = () => <Color />

export const display = () => {
  const r = number('red', 0)
  const g = number('green', 0)
  const b = number('blue', 0)

  const props: ColorDisplayProps = {
    color: [r, g, b],
  }

  return <ColorDisplay {...props} />
}
