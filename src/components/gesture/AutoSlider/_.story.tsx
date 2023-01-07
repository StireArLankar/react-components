import { ComponentStory, ComponentMeta } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { AutoSlider } from './AutoSlider'
import { ListSlider } from './ListSlider'

const slides = ['red', 'blue', 'yellow', 'orange']
const style = { width: '100%', height: '100%', opacity: 0.7 }

type NewType = {
  amount: number
  Component: typeof ListSlider | typeof AutoSlider
}

const Temp = ({ amount, Component }: NewType) => (
  <Component>
    {slides.slice(0, amount).map((background, i) => (
      <div key={i} style={{ ...style, background }} />
    ))}
  </Component>
)

export default {
  title: 'Gesture/Auto Slider',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
  parameters: { controls: { include: ['amount'] } },
  args: { amount: 3 },
  argTypes: {
    amount: {
      type: 'number',
      control: { type: 'range', min: 1, max: slides.length, step: 1 },
    },
  },
} as ComponentMeta<typeof Temp>

const Template: ComponentStory<typeof Temp> = (props) => <Temp {...props} />
export const example = Template.bind({})
example.args = { Component: AutoSlider }

export const example2 = Template.bind({})
example2.args = { Component: ListSlider }
