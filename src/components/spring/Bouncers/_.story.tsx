import { ComponentMeta } from '@storybook/react'

import { Bouncers } from '.'

import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Bouncers',
  decorators: [withCustomTheme],
} as ComponentMeta<typeof Bouncers>

export const bouncers = () => <Bouncers />
