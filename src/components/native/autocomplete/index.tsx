import React from 'react'

import Autocomplete from './autocomplete'
import array from './countries'

import useBGColor from '~/hook/useBgColor'

export const AutocompleteContainer = () => {
  useBGColor(240, 208, 233)

  return <Autocomplete items={array} />
}

export default AutocompleteContainer
