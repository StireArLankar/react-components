import React from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { MouseFollower, MouseFollowerProps } from '.'
import { number } from '@storybook/addon-knobs'

export default {
  title: 'Spring|Mouse Followers',
  decorators: [withCustomTheme],
}

export const mouseFollowers = () => {
  const props: MouseFollowerProps = {
    amount: Math.max(number('amount', 3), 1),
  }

  return <MouseFollower {...props} />
}
