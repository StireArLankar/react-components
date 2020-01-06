import React from 'react'
import { FormFields } from '.'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

export default {
  title: 'Native|Form Fields',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20 }),
    withCustomTheme,
  ],
}

export const example = () => <FormFields />
