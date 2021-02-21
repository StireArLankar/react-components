import React from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Bouncers, BouncersProps } from '.'

export default {
  title: 'Spring/Bouncers',
  decorators: [withCustomTheme],
}

export const bouncers = () => {
  const props: BouncersProps = {}

  return <Bouncers {...props} />
}
