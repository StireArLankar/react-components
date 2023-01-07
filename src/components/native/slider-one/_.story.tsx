import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Button } from './Button'

import Slider from '.'

export default {
  title: 'Native/SliderOne',
  decorators: [
    withCenteredStyle({ width: 'auto', backgroundColor: 'var(--)' }),
    withCustomTheme,
  ],
}

export const slider = () => <Slider />

type Props = { children: string }
const Asd = (props: Props) => <Button {...props} />
const Template: ComponentStory<typeof Asd> = (props) => <Asd {...props} />

export const button = Template.bind({})
button.args = {
  children: 'Inner text',
}
