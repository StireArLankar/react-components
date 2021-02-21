import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { AutocompleteContainer } from '.'

export default {
  title: 'Native/Autocomplete',
  decorators: [
    withCenteredStyle({ width: 440, alignSelf: 'flex-start', padding: 20 }),
    withCustomTheme,
  ],
}

export const autocomplete = () => <AutocompleteContainer />
