import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { ComplexSlider } from './Complex'
import { RepeatedBounds } from './RepeatedBounds'
import { SimpleSlider } from './Simple'

export default {
  title: 'Gesture/Transition Slider',
  decorators: [
    withCenteredStyle({
      width: '100%',
      minHeight: '110vh',
      display: 'grid',
      placeItems: 'center',
    }),
    withCustomTheme,
  ],
}

export const _SimpleSlider = () => <SimpleSlider />

// -----------------

const Template: ComponentStory<typeof ComplexSlider> = (props) => (
  <ComplexSlider {...props} />
)
export const _ComplexSlider = Template.bind({})
_ComplexSlider.args = { hideValues: false, start: 50, overflow: false }

// -----------------

const Template1: ComponentStory<typeof RepeatedBounds> = (props) => (
  <RepeatedBounds {...props} />
)
export const _RepeatedBounds = Template1.bind({})
_RepeatedBounds.args = { hideValues: false, number: 4, overflow: false }
