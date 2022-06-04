import { ComponentStory } from '@storybook/react'

import { Ripple } from '.'

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

const Template1: ComponentStory<typeof Ripple> = (props) => (
  <Ripple {...props} />
)
export const ripple = Template1.bind({})
ripple.args = { children: 'Hello world', variant: 'primary' }
ripple.parameters = { controls: { include: ['children', 'variant'] } }
