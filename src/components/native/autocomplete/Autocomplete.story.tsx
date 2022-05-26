import React from 'react'

import { AutocompleteContainer } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Native/Autocomplete',
  decorators: [
    withCenteredStyle({ width: 440, alignSelf: 'flex-start', padding: 20 }),
    withCustomTheme,
  ],
}

export const autocomplete = () => <AutocompleteContainer />
