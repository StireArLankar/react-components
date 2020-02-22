import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Test } from './Test'
import { Test as FixedTest } from './FixedPopup/Test'
import { radios } from '@storybook/addon-knobs'

export default {
  title: 'Spring|Popup',
  decorators: [withCustomTheme],
}

export const popup = () => (
  <Test
    position={radios('position', { top: 'top', bottom: 'bottom' }, 'top')}
  />
)

popup.story = {
  decorators: [withCenteredStyle({ width: '100%' })],
}

export const fixedPopup = () => (
  <FixedTest
    position={radios('position', { top: 'top', bottom: 'bottom' }, 'top')}
  />
)

fixedPopup.story = {
  decorators: [
    withCenteredStyle({
      width: '100%',
      minHeight: '200vh',
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}
