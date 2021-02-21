import React, { Fragment } from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { withTopLabel } from '../../../_storybook/withTopLabel'
// import { Inertia } from './Inertia'
import { themeColors } from '../../../theme/theme.styles'

const label = (
  <Fragment>
    <span>Thx to </span>
    <a
      style={{ color: themeColors.orange, textDecoration: 'none' }}
      href='https://github.com/react-spring/react-use-gesture/issues/132'
    >
      demonstration
    </a>
  </Fragment>
)

export default {
  title: 'Gesture/Inertia',
  decorators: [
    withCenteredStyle({ width: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const example = () => (
  <div style={{ color: 'white', fontSize: 30 }}>
    NOT WORKING UNTIL REACT-SPRING_V9
  </div>
)

// export const inertia = () => <Inertia />
