import CameraRounded from '@material-ui/icons/CameraRounded'

import { Icon } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { themeColors } from '~/theme/theme.styles'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=YRp8kSUZiss'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      video
    </a>
  </>
)

export default {
  title: 'Design/Icons',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
}

export const button = () => <Icon Icon={CameraRounded} />
