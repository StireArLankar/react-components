import React from 'react'
import useBGColor from 'hook/useBgColor'

import array from './countries'
import Autocomplete from './autocomplete'

export const AutocompleteContainer = () => {
  useBGColor(240, 208, 233)

  return <Autocomplete items={array} />
}

export default AutocompleteContainer
