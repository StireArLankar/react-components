import { ComponentStory } from '@storybook/react'

import Temp, { ResponsiveTextProps } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Design/ResponsiveText',
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

const Template: ComponentStory<typeof Asd> = (props) => <Asd {...props} />

export const Example = Template.bind({})
Example.args = {
  text: 'Hello world',
  variant: 'bold',
  width: 200,
}

const Asd = (props: ResponsiveTextProps & { width: number }) => (
  <div
    style={{
      width: props.width,
      background: 'red',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Temp {...props} />
  </div>
)
