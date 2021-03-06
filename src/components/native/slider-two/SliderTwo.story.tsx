import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { SliderTwo } from '.'
import { themeColors } from '../../../theme/theme.styles'
import Slide, { SlideProps } from './slide'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Native/SliderTwo',
  decorators: [
    withCenteredStyle({ width: 'auto', backgroundColor: themeColors.text }),
    withCustomTheme,
  ],
}

export const slider = () => <SliderTwo />

export const slide = () => {
  const props: SlideProps = {
    title: text('title', 'Random title'),
    content: text(
      'content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugit omnis accusamus dolorem dolore eligendi! Nulla adipisci odio corrupti quasi fugit suscipit soluta possimus rerum tempore? Dicta cumque fugiat sed.'
    ),
  }
  return (
    <div style={{ width: 300 }}>
      <Slide {...props} />
    </div>
  )
}
