import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { vars } from '~/theme/theme.css'

import Slide from './Slide1'

import { SliderTwo } from '.'

export default {
  title: 'Native/SliderTwo',
  decorators: [
    withCenteredStyle({ width: 'auto', backgroundColor: vars.color.text }),
    withCustomTheme,
  ],
}

export const _Slider = () => <SliderTwo />

const Template: ComponentStory<typeof Slide> = (props) => (
  <div style={{ width: 300 }}>
    <Slide {...props} />
  </div>
)

export const _Slide = Template.bind({})
_Slide.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugit omnis accusamus dolorem dolore eligendi! Nulla adipisci odio corrupti quasi fugit suscipit soluta possimus rerum tempore? Dicta cumque fugiat sed.',
  title: 'Random title',
}
