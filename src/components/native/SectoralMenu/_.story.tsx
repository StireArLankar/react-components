import { ComponentStory } from '@storybook/react'

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
} from '~/components/materialSvgs'
import { storyLink } from '~/theme/theme.css'

import { SectoralMenu, SectoralButtonModel } from '.'

const label = (
  <>
    <span>Credits to </span>
    <a
      className={storyLink}
      href='https://tympanus.net/Tutorials/CircularNavigation/index.html'
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
  buttonsAmount: { control: { type: 'range', min: 1, max: buttons.length } },
}
