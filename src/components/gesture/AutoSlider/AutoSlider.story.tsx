import React from 'react'

import { number } from '@storybook/addon-knobs'

import { AutoSlider } from './AutoSlider'
import { ListSlider } from './ListSlider'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

const slides = ['red', 'blue', 'yellow', 'orange']
const style = { width: '100%', height: '100%' }

export default {
  title: 'Gesture/Auto Slider',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const example = () => {
  const amount = number('amount', slides.length)

  return (
    <AutoSlider>
      {slides.slice(0, amount).map((color, i) => (
        <div key={i} style={{ ...style, background: color, opacity: 0.7 }} />
      ))}
    </AutoSlider>
  )
}

export const example2 = () => {
  const amount = number('amount', slides.length)

  return (
    <ListSlider>
      {slides.slice(0, amount).map((color, i) => (
        <div key={i} style={{ ...style, background: color, opacity: 0.7 }} />
      ))}
    </ListSlider>
  )
}
