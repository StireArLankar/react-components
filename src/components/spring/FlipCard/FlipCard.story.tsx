import React from 'react'
import { radios } from '@storybook/addon-knobs'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { FlipCardScaled } from './FlipCardScaled'

import { FlipCard } from '.'

export default {
  title: 'Spring/FlipCard',
  decorators: [
    withCenteredStyle({ width: 200, perspective: 1000 }),
    withCustomTheme,
  ],
}

export const card = () => <FlipCard {...props} />

export const cardScaled = () => (
  <FlipCardScaled
    {...props}
    dir={radios(
      'dir',
      {
        horizontal1: '+x',
        horizontal2: '-x',
        vertical1: '+y',
        vertical2: '-y',
      },
      '+x'
    )}
  />
)

const front = (
  <div
    style={{
      height: 200,
      width: '100%',
      backgroundColor: 'black',
      color: 'white',
      display: 'grid',
      placeItems: 'center',
    }}
  >
    Front
  </div>
)

const back = (
  <div
    style={{
      height: 100,
      width: '100%',
      backgroundColor: 'grey',
      color: 'black',
      display: 'grid',
      placeItems: 'center',
    }}
  >
    Back
  </div>
)

const props = {
  front,
  back,
}
