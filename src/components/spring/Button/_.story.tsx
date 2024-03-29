import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Temp, { ResponsiveTextProps } from '.'

export default {
  title: 'Spring/Button',
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
}

const Test = ({ width, ...props }: ResponsiveTextProps & { width: number }) => (
  <div
    style={{
      width,
      background: 'red',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Temp {...props} />
  </div>
)

const Template1: ComponentStory<typeof Test> = (props) => <Test {...props} />
export const Button = Template1.bind({})
Button.args = { width: 400, text: 'Hello world' }
