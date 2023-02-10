import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component, { ResponsiveTextProps } from '.'

const meta = {
  title: 'Design/ResponsiveText',
  component: Component,
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'teal',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
  args: {
    text: 'Hello world',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['bold', 'regular'],
      defaultValue: 'bold',
    },
  },
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

const Asd = (props: ResponsiveTextProps & { width: number }) => (
  <div
    style={{
      width: props.width,
      background: 'red',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Component {...props} />
  </div>
)

export const Base: Story = {}

export const WithBackground: StoryObj<typeof Asd> = {
  render: (props) => <Asd {...props} />,
  args: { width: 200 },
}
