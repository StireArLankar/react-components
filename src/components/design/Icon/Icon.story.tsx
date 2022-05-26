import React, { Fragment } from 'react'

import CameraRounded from '@material-ui/icons/CameraRounded'

import { Icon, IconProps } from './'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { themeColors } from '~/theme/theme.styles'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=YRp8kSUZiss'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      video
    </a>
  </Fragment>
)

export default {
  title: 'Design/Icons',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
}

export const button = () => {
  const props: IconProps = {
    Icon: CameraRounded,
  }

  return <Icon {...props} />
}
