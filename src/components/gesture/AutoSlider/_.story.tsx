import { Meta, StoryObj } from '@storybook/react'

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

const meta = {
  component: Temp,
  title: 'Gesture/Auto Slider',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
  args: { amount: 3 },
  argTypes: {
    amount: {
      type: 'number',
      control: { type: 'range', min: 1, max: slides.length, step: 1 },
    },
  },
} satisfies Meta<typeof Temp>

export default meta

type Story = StoryObj<typeof meta>

export const AnimateIndividualSlides: Story = {
  args: { Component: AutoSlider },
}

export const AnimateWholeContainer: Story = {
  args: { Component: ListSlider },
}
