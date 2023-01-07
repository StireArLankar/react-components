import { ComponentMeta } from '@storybook/react'

import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Bouncers } from '.'

export default {
  title: 'Spring/Bouncers',
  decorators: [withCustomTheme],
} as ComponentMeta<typeof Bouncers>

export const bouncers = () => <Bouncers />
