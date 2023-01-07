import { ComponentMeta, ComponentStory } from '@storybook/react'

import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { MouseFollower as MouseFollowerV2 } from './V2'

import { MouseFollower } from '.'

export default {
  title: 'Spring/Mouse Followers',
  decorators: [withCustomTheme],
  component: MouseFollower,
  argTypes: {
    amount: { control: { type: 'number', min: 1, max: 30, step: 1 } },
  },
  args: { amount: 3 },
} as ComponentMeta<typeof MouseFollower>

const Template: ComponentStory<typeof MouseFollower> = (props) => (
  <MouseFollower {...props} />
)

export const mouseFollowers = Template.bind({})

// ------------

const Template1: ComponentStory<typeof MouseFollowerV2> = (props) => (
  <MouseFollowerV2 {...props} />
)

export const another = Template1.bind({})
another.argTypes = { skew: { control: { type: 'number', min: 5, step: 1 } } }
another.args = { skew: 5 }
