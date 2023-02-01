import React from 'react'

import useBGColor from '~/hook/useBgColor'

import Autocomplete from './Autocomplete'
import array from './countries'

export const AutocompleteContainer = () => {
  useBGColor(240, 208, 233)

  return <Autocomplete items={array} />
}

export default AutocompleteContainer
