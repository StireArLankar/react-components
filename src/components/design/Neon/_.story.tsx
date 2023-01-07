import { ComponentMeta, ComponentStory } from '@storybook/react'

import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import { NeonButton } from './NeonButton'
import { NeonButtonV2 } from './NeonV2'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=wjHTKLstbRg'>
      video
    </a>
  </>
)

export default {
  title: 'Design/Neon',
  decorators: [
    (fn) => (
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'grid',
          placeItems: 'center',
          background: '#050801',
        }}
      >
        {fn()}
      </div>
    ),
    withCustomTheme,
    withTopLabel(label),
  ],
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetsColors: ['#03e9f4', 'red', 'green'],
        defaultValue: '#03e9f4',
      },
    },
  },

  parameters: { controls: { include: ['color'] } },
  args: { children: 'Button' },
} as ComponentMeta<typeof NeonButton>

const Template1: ComponentStory<typeof NeonButton> = (props) => (
  <NeonButton {...props} />
)
export const button = Template1.bind({})
// button.args = { children: 'Button' }
// button.parameters = { controls: { include: ['color'] } }

const Template2: ComponentStory<typeof NeonButtonV2> = (props) => (
  <NeonButtonV2 {...props} />
)
export const buttonV2 = Template2.bind({})
// buttonV2.args = { children: 'Button' }
// buttonV2.parameters = { controls: { include: ['color'] } }
