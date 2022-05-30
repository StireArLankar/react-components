import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LiquidButton } from './LiquidButton'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { themeColors } from '~/theme/theme.styles'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=wjHTKLstbRg'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      video
    </a>
  </>
)

export default {
  title: 'Design/Liquid',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
} as ComponentMeta<typeof LiquidButton>

const Template: ComponentStory<typeof LiquidButton> = (props) => (
  <LiquidButton {...props} />
)

export const button = Template.bind({})
button.args = { children: 'Hello world' }
button.argTypes = { children: { type: 'string' } }
button.parameters = { controls: { include: ['children'] } }
