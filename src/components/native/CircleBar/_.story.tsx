import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Ring } from './ProgressRing'
import Result from './Result'

import { CircleBar } from '.'

export default {
  title: 'Native/Circle Bar',
  decorators: [withCenteredStyle({ width: 500 }), withCustomTheme],
}

export const _CircleBar = () => <CircleBar />

const Template: ComponentStory<typeof Result> = (props) => <Result {...props} />
export const _Result = Template.bind({})
_Result.args = {
  progress: 0,
}
_Result.argTypes = {
  progress: { control: { type: 'range', min: -10, max: 110, step: 1 } },
}

const Template1: ComponentStory<typeof Ring> = (props) => <Ring {...props} />
export const _Ring = Template1.bind({})
_Ring.args = {
  progress: 0,
  radius: 200,
  stroke: 30,
}
_Ring.argTypes = { onRingClick: { action: 'onRingClick' } }
