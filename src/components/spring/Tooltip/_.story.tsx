import { ComponentStory } from '@storybook/react'

import { Test } from './Test'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Tooltip',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

const Template1: ComponentStory<typeof Test> = (props) => <Test {...props} />
export const tooltip = Template1.bind({})
