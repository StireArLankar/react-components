import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Test } from './Test'
import { Test as FixedTest } from './FixedPopup/Test'
import { Test as AnchorTest } from './PopupWithAnchor/Test'
import { radios, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Spring/Popup',
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
    temp={boolean('move', false)}
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

export const popupWithAnchor = () => (
  <AnchorTest
    position={radios('position', { top: 'top', bottom: 'bottom' }, 'top')}
    temp={boolean('move', false)}
  />
)

popupWithAnchor.story = {
  decorators: [
    withCenteredStyle({
      width: '100%',
      minHeight: '200vh',
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}
