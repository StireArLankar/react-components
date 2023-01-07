import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Ring } from './progress-ring'
import Result from './result'

import { CircleBar } from '.'

export default {
  title: 'Native/Circle Bar',
  decorators: [withCenteredStyle({ width: 500 }), withCustomTheme],
}

export const circleBar = () => <CircleBar />

const Template: ComponentStory<typeof Result> = (props) => <Result {...props} />
export const result = Template.bind({})
result.args = {
  progress: 0,
}
result.argTypes = {
  progress: { control: { type: 'range', min: -10, max: 110, step: 1 } },
}

const Template1: ComponentStory<typeof Ring> = (props) => <Ring {...props} />
export const ring = Template1.bind({})
ring.args = {
  progress: 0,
  radius: 200,
  stroke: 30,
}
ring.argTypes = { onRingClick: { action: 'onRingClick' } }
