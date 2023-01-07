import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { CameraRounded } from '~/components/material-svgs'
import { storyLink } from '~/theme/theme.css'

import { Icon } from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=YRp8kSUZiss'>
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
