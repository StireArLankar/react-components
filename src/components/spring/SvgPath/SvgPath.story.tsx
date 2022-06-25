import { SvgPath } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { vars } from '~/theme/theme.css'

export default {
  title: 'Spring/SvgPath',
  decorators: [withCenteredStyle({ color: vars.color.text }), withCustomTheme],
}

export const svg = () => <SvgPath />
