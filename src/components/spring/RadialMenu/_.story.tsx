import { action } from '@storybook/addon-actions'
import { ComponentStory } from '@storybook/react'

import { CentralButton } from './CentralButton'
import { RadialButtons, RadialButtonModel } from './RadialButtons'

import { RadialMenu, RadialMenuProps } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import {
  Adjust,
  CameraRounded,
  EmojiEventsRounded,
  GroupWork,
  MyLocationRounded,
  ViewComfyRounded,
} from '~/components/material-svgs'
import { vars } from '~/theme/theme.css'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=MhQI-ysRyrk'
      style={{ color: vars.color.darkBlue, textDecoration: 'none' }}
    >
      Awesome Content by fireship
    </a>
  </>
)

export default {
  title: 'Spring/Radial Menu',
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

const Asd = ({
  buttonsAmount,
  ...props
}: RadialMenuProps & { buttonsAmount: number }) => (
  <RadialMenu {...props} buttons={props.buttons.slice(0, buttonsAmount)} />
)
const Template2: ComponentStory<typeof Asd> = (props) => <Asd {...props} />

export const radialMenu = Template2.bind({})
radialMenu.args = {
  buttons: buttons,
  buttonsAmount: 6,
  isOpen: false,
  onClick: action('onClick'),
}
radialMenu.parameters = {
  controls: { include: ['buttonsAmount', 'isOpen'] },
}
radialMenu.argTypes = {
  buttonsAmount: {
    control: { type: 'number', min: 0, max: 6, step: 1 },
  },
}

const Template1: ComponentStory<typeof CentralButton> = (props) => (
  <CentralButton {...props} />
)
export const centralButton = Template1.bind({})
centralButton.args = {
  onClick: action('onClick'),
  isOpen: false,
}

const Template: ComponentStory<typeof RadialButtons> = (props) => (
  <div style={{ position: 'relative' }}>
    <RadialButtons {...props} />
  </div>
)

export const radialButtons = Template.bind({})
radialButtons.args = {
  buttons,
  isOpen: false,
}
radialButtons.parameters = { controls: { include: ['isOpen'] } }
