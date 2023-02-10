import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { ColorDisplay } from './ColorDisplay'

import { Color } from '.'

export default {
  title: 'Native/Color Picker',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20 }),
    withCustomTheme,
  ],
}

export const ColorPicker = () => <Color />

type Props = {
  red: number
  green: number
  blue: number
}

const Asd = (props: Props) => (
  <ColorDisplay color={[props.red, props.green, props.blue]} />
)

const Template: ComponentStory<typeof Asd> = (props) => <Asd {...props} />
export const Display = Template.bind({})
Display.args = {
  red: 0,
  green: 0,
  blue: 0,
}
