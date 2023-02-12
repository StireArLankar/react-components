import { StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component1 from './first'
import { Second } from './second'

export default {
  title: 'Design/Goo',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const First: StoryObj<typeof Component1> = {
  render: () => <Component1 />,
}

export const _Second: StoryObj<typeof Second> = {
  render: () => <Second />,
}
