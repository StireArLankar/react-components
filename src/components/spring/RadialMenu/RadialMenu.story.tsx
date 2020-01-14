import React, { Fragment } from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { withTopLabel } from '../../../_storybook/withTopLabel'

import Adjust from '@material-ui/icons/Adjust'
import ViewComfyRounded from '@material-ui/icons/ViewComfyRounded'
import GroupWork from '@material-ui/icons/GroupWork'
import CameraRounded from '@material-ui/icons/CameraRounded'
import EmojiEventsRounded from '@material-ui/icons/EmojiEventsRounded'
import MyLocationRounded from '@material-ui/icons/MyLocationRounded'

import { RadialMenu, RadialMenuProps } from '.'
import { CentralButton, CentralButtonProps } from './CentralButton'
import {
  RadialButtons,
  RadialButtonsProps,
  RadialButtonModel,
} from './RadialButtons'
import { boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { themeColors } from '../../../theme/theme.styles'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=MhQI-ysRyrk'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      Awesome Content by fireship
    </a>
  </Fragment>
)

export default {
  title: 'Spring|Radial Menu',
  decorators: [
    withCenteredStyle({ width: 600 }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

const buttons: RadialButtonModel[] = [
  {
    Icon: Adjust,
    color: 'green',
    onClick: () => {},
  },
  {
    Icon: GroupWork,
    color: 'black',
    onClick: () => {},
  },
  {
    Icon: CameraRounded,
    color: 'orange',
    onClick: () => {},
  },
  {
    Icon: EmojiEventsRounded,
    color: 'blue',
    onClick: () => {},
  },
  {
    Icon: MyLocationRounded,
    color: 'red',
    onClick: () => {},
  },
  {
    Icon: ViewComfyRounded,
    color: 'teal',
    onClick: () => {},
  },
]

export const radialMenu = () => {
  const buttonsAmount = Math.max(number('buttonsAmount', buttons.length), 1)
  const props: RadialMenuProps = {
    isOpen: boolean('isOpen', false),
    onClick: action('onClick'),
    buttons: buttons.slice(0, buttonsAmount),
  }

  return <RadialMenu {...props} />
}

export const centralButton = () => {
  const props: CentralButtonProps = {
    isOpen: boolean('isOpen', false),
    onClick: action('onClick'),
  }

  return <CentralButton {...props} />
}

export const radialButtons = () => {
  const props: RadialButtonsProps = {
    buttons,
    isOpen: boolean('isOpen', false),
  }

  return (
    <div style={{ position: 'relative' }}>
      <RadialButtons {...props} />
    </div>
  )
}
