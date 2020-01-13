import React, { Fragment } from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { withTopLabel } from '../../../_storybook/withTopLabel'
import {
  Adjust,
  ViewComfyRounded,
  GroupWork,
  CameraRounded,
  EmojiEventsRounded,
  MyLocationRounded,
} from '@material-ui/icons'

import { SectoralMenu, SectoralButtonModel, SectoralMenuProps } from '.'
import { number } from '@storybook/addon-knobs'
import { themeColors } from '../../../theme/theme.styles'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://tympanus.net/Tutorials/CircularNavigation/index.html'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      Nice guide
    </a>
  </Fragment>
)

export default {
  title: 'Native|Sectoral Menu',
  decorators: [withCenteredStyle(), withCustomTheme, withTopLabel(label)],
}

const buttons: SectoralButtonModel[] = [
  {
    Icon: Adjust,
    onClick: () => {},
  },
  {
    Icon: GroupWork,
    onClick: () => {},
  },
  {
    Icon: CameraRounded,
    onClick: () => {},
  },
  {
    Icon: EmojiEventsRounded,
    onClick: () => {},
  },
  {
    Icon: MyLocationRounded,
    onClick: () => {},
  },
  {
    Icon: ViewComfyRounded,
    onClick: () => {},
  },
]

export const sectoralMenu = () => {
  const buttonsAmount = Math.max(number('buttonsAmount', buttons.length), 1)
  const props: SectoralMenuProps = {
    buttons: buttons.slice(0, buttonsAmount),
    // buttons: buttons,
  }

  return <SectoralMenu {...props} />
}
