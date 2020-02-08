import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { FlipCard } from '.'

export default {
  title: 'Spring|FlipCard',
  decorators: [
    withCenteredStyle({ width: 200, perspective: 1000 }),
    withCustomTheme,
  ],
}

export const card = () => <FlipCard {...props} />

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
