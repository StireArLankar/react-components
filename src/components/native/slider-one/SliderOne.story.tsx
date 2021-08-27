import React from 'react'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'
import { text } from '@storybook/addon-knobs'

import { Button, ButtonProps } from './Button'

import Slider from '.'

export default {
  title: 'Native/SliderOne',
  decorators: [
    withCenteredStyle({ width: 'auto', backgroundColor: 'var(--)' }),
    withCustomTheme,
  ],
}

export const slider = () => <Slider />

export const button = () => {
  const props: ButtonProps = {
    children: text('text', 'Inner text'),
  }

  return <Button {...props} />
}
