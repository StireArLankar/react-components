import React, { Fragment } from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { NeonButton } from './NeonButton'
import { NeonButtonV2 } from './NeonV2'
import { color } from '@storybook/addon-knobs'
import { themeColors } from '../../../theme/theme.styles'
import { withTopLabel } from '../../../_storybook/withTopLabel'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=wjHTKLstbRg'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
      video
    </a>
  </Fragment>
)

export default {
  title: 'Design|Neon',
  decorators: [
    (fn: any) => (
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'grid',
          placeItems: 'center',
          background: '#050801',
        }}
      >
        {fn()}
      </div>
    ),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const button = () => {
  return <NeonButton color={color('color', '#03e9f4')}>Button</NeonButton>
}

export const buttonV2 = () => (
  <NeonButtonV2 color={color('color', '#03e9f4')}>Button</NeonButtonV2>
)
