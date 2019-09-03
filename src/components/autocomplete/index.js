import React from 'react'
import useBGColor from '../../hook/useBGColor'
import array from './countries'
import Autocomplete from './autocomplete'

const Container = (props) => {
  useBGColor(240, 208, 233)
  
  return (
    <Autocomplete items={array} />
  )
}

export default Container
