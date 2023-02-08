import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Test } from './Test'

export default {
  title: 'Spring/Tooltip',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

const Template1: ComponentStory<typeof Test> = (props) => <Test {...props} />
export const Tooltip = Template1.bind({})
