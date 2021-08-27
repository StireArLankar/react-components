import React from 'react'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { MouseFollower, MouseFollowerProps } from '.'
import { MouseFollower as MouseFollowerV2 } from './V2'
import { number } from '@storybook/addon-knobs'

export default {
  title: 'Spring/Mouse Followers',
  decorators: [withCustomTheme],
}

export const mouseFollowers = () => {
  const props: MouseFollowerProps = {
    amount: Math.max(number('amount', 3), 1),
  }

  return <MouseFollower {...props} />
}

export const another = () => {
  const props = {
    amount: Math.max(number('amount', 3), 1),
    skew: Math.max(number('skew', 0), 5),
  }

  return <MouseFollowerV2 {...props} />
}
