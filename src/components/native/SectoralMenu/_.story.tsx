import Adjust from '@material-ui/icons/Adjust'
import CameraRounded from '@material-ui/icons/CameraRounded'
import EmojiEventsRounded from '@material-ui/icons/EmojiEventsRounded'
import GroupWork from '@material-ui/icons/GroupWork'
import MyLocationRounded from '@material-ui/icons/MyLocationRounded'
import ViewComfyRounded from '@material-ui/icons/ViewComfyRounded'
import { ComponentStory } from '@storybook/react'

import { SectoralMenu, SectoralButtonModel } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { themeColors } from '~/theme/theme.styles'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://tympanus.net/Tutorials/CircularNavigation/index.html'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      Nice guide
    </a>
  </>
)

export default {
  title: 'Native/Sectoral Menu',
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

type Props = { buttonsAmount: number }

const Temp = ({ buttonsAmount }: Props) => (
  <SectoralMenu buttons={buttons.slice(0, buttonsAmount)} />
)
const Template1: ComponentStory<typeof Temp> = (props) => <Temp {...props} />
export const sectoralMenu = Template1.bind({})
sectoralMenu.args = { buttonsAmount: buttons.length }
sectoralMenu.argTypes = {
  buttonsAmount: { control: { type: 'number', min: 1, max: buttons.length } },
}
