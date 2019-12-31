import React from 'react'
import array from './countries'
import Autocomplete from './Autocomplete'
import useBGColor from '../../../hook/useBgColor'

export const AutocompleteContainer = () => {
  useBGColor(240, 208, 233)

  return <Autocomplete items={array} />
}

export default AutocompleteContainer
