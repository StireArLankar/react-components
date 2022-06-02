import { text, boolean } from '@storybook/addon-knobs'

import { Ripple, RippleProps } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { themeColors } from '~/theme/theme.styles'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=ueyRcYEmsrI'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      video
    </a>
  </>
)

export default {
  title: 'Design/Ripple',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
}

export const ripple = () => {
  const props: RippleProps = {
    children: text('text', 'Hello world'),
    secondary: boolean('secondary', false),
  }

  return <Ripple {...props} />
}
