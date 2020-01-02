import React from 'react'

import { CustomCheckboxContainer, CustomCheckbox } from './CustomCheckbox'
import { withCustomTheme } from '../_storybook/withCustomTheme'
import { withCenteredStyle } from '../_storybook/withCenteredStyle'

export default {
  title: 'CustomCheckbox',
  decorators: [
    withCenteredStyle({ width: 440, alignSelf: 'flex-start', padding: 20 }),
    withCustomTheme,
  ],
}

export const themedCheckbox = () => <CustomCheckboxContainer />

export const checkbox = () => <CustomCheckbox />
