import { ComponentStory } from '@storybook/react'

import { Test as FixedTest } from './FixedPopup/Test'
import { Test as AnchorTest } from './PopupWithAnchor/Test'
import { Test } from './Test'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Popup',
  decorators: [withCustomTheme],
}

const Template1: ComponentStory<typeof Test> = (props) => <Test {...props} />
export const popup = Template1.bind({})
popup.decorators = [withCenteredStyle({ width: '100%' })]

const Template2: ComponentStory<typeof FixedTest> = (props) => (
  <FixedTest {...props} />
)
export const fixedPopup = Template2.bind({})
fixedPopup.decorators = [
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
export const popupWithAnchor = Template3.bind({})
popup.decorators = [
  withCenteredStyle({
    width: '100%',
    minHeight: '200vh',
    display: 'grid',
    placeItems: 'center',
  }),
]
