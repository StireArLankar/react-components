import { ComponentMeta, ComponentStory } from '@storybook/react'

import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { NestedNeumorphism } from './Nested'

import { Neumorphism } from '.'

export default {
  title: 'Design/Neumorphism',
  decorators: [
    (fn) => (
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'grid',
          placeItems: 'center',
          background:
            'linear-gradient(180deg, #F1F5F8 0%, #EBF3FA 0.01%, #DDE7F3 53.92%, #E6F0F9 100%)',
        }}
      >
        {fn()}
      </div>
    ),
    withCustomTheme,
  ],
} as ComponentMeta<typeof Neumorphism>

const Template: ComponentStory<typeof Neumorphism> = (props) => (
  <Neumorphism {...props} />
)
export const Example = Template.bind({})
Example.args = { isActive: false }

export const Nested = () => <NestedNeumorphism />
