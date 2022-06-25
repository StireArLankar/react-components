import { ComponentStory } from '@storybook/react'

import Slide from './Slide'

import { SliderTwo } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { themeColors } from '~/theme/theme.styles'

export default {
  title: 'Native/SliderTwo',
  decorators: [
    withCenteredStyle({ width: 'auto', backgroundColor: themeColors.text }),
    withCustomTheme,
  ],
}

export const slider = () => <SliderTwo />

const Template: ComponentStory<typeof Slide> = (props) => (
  <div style={{ width: 300 }}>
    <Slide {...props} />
  </div>
)

export const slide = Template.bind({})
slide.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugit omnis accusamus dolorem dolore eligendi! Nulla adipisci odio corrupti quasi fugit suscipit soluta possimus rerum tempore? Dicta cumque fugiat sed.',
  title: 'Random title',
}
