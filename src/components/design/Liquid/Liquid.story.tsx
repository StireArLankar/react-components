import React, { Fragment } from 'react'
import { text } from '@storybook/addon-knobs'

import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { withTopLabel } from '../../../_storybook/withTopLabel'
import { themeColors } from '../../../theme/theme.styles'

import { LiquidButton, LiquidButtonProps } from './LiquidButton'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=wjHTKLstbRg'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      video
    </a>
  </Fragment>
)

export default {
  title: 'Design/Liquid',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
}

export const button = () => {
  const props: LiquidButtonProps = {
    children: text('text', 'Hello world'),
  }

  return <LiquidButton {...props} />
}

// button.story = {
//   decorators: [(storyFn: any) => <div style={{ border: '5px solid red' }}>{storyFn()}</div>],
// };
