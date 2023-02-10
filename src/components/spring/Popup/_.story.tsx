import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Test as FixedTest } from './FixedPopup/Test'
import { Test as AnchorTest } from './PopupWithAnchor/Test'
import { Test } from './Test'

export default {
  title: 'Spring/Popup',
  decorators: [withCustomTheme],
  argTypes: {
    position: {
      control: 'radio',
      options: ['top', 'bottom'],
      defaultValue: 'top',
    },
  },
}

const Template1: ComponentStory<typeof Test> = (props) => <Test {...props} />
export const Popup = Template1.bind({})
Popup.decorators = [withCenteredStyle({ width: '100%' })]

const Template2: ComponentStory<typeof FixedTest> = (props) => (
  <FixedTest {...props} />
)
export const FixedPopup = Template2.bind({})
FixedPopup.decorators = [
  withCenteredStyle({
    width: '100%',
    minHeight: '200vh',
    display: 'grid',
    placeItems: 'center',
  }),
]

const Template3: ComponentStory<typeof AnchorTest> = (props) => (
  <AnchorTest {...props} />
)
export const PopupWithAnchor = Template3.bind({})
PopupWithAnchor.decorators = [
  withCenteredStyle({
    width: '100%',
    minHeight: '200vh',
    display: 'grid',
    placeItems: 'center',
  }),
]
