import React from 'react'

import { Accordion } from '.'

const AccordionContainer = () => {
  return (
    <Accordion title='Title'>
      <div style={{ height: 300, width: 400, backgroundColor: 'blue' }} />
    </Accordion>
  )
}

export default AccordionContainer
