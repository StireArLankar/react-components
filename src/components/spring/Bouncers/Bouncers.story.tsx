import React from 'react'

import { Bouncers, BouncersProps } from '.'

import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Bouncers',
  decorators: [withCustomTheme],
}

export const bouncers = () => {
  const props: BouncersProps = {}

  return <Bouncers {...props} />
}
