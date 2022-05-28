import React from 'react'

import { ComponentStory } from '@storybook/react'

import { ScrollBar as Component } from './ScrollBar'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Gesture/ScrollBar',
  decorators: [withCustomTheme, withCenteredStyle({})],
}

const Template: ComponentStory<typeof Component> = ({ ...rest }) => (
  <Component {...rest} />
)

export const ScrollBar = Template.bind({})

ScrollBar.args = {
  itemsAmount: 5,
}
