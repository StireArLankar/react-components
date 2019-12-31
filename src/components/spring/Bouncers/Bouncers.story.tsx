import React from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Bouncers, BouncersProps } from '.'

export default {
  title: 'Spring|Bouncers',
  decorators: [withCustomTheme],
}

export const Bouncerss = () => {
  const props: BouncersProps = {}

  return <Bouncers {...props} />
}
