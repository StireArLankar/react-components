import { ComponentMeta, ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import { LiquidButton } from './LiquidButton'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=wjHTKLstbRg'>
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
