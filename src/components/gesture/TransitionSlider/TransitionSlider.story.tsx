import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { SimpleSlider } from './Simple'
import { ComplexSlider } from './Complex'
import { RepeatedBounds } from './RepeatedBounds'
import { boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Gesture/Transition Slider',
  decorators: [
    withCenteredStyle({
      width: '100%',
      minHeight: '110vh',
      display: 'grid',
      placeItems: 'center',
    }),
    withCustomTheme,
  ],
}

export const simpleSlider = () => <SimpleSlider />
export const complexSlider = () => (
  <ComplexSlider
    overflow={boolean('overflow', false)}
    hideValues={boolean('hideValues', false)}
    start={number('start', 50)}
  />
)

export const repeatedBounds = () => (
  <RepeatedBounds
    overflow={boolean('overflow', true)}
    hideValues={boolean('hideValues', false)}
    number={number('number', 4)}
  />
)
