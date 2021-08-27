import React, { useState } from 'react'

import { withCustomTheme } from '_storybook/withCustomTheme'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withTopLabel } from '_storybook/withTopLabel'
import { themeColors } from 'theme/theme.styles'

import Temp from '.'

const label = (
  <>
    <a
      href='https://github.com/s-yadav/react-number-format'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
      docs
    </a>
  </>
)
export default {
  title: 'Design/MaskedInput',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'teal',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
    withTopLabel(label),
  ],
}

const Example = () => {
  const [value, setValue] = useState('')

  return (
    <Temp
      value={value}
      onChange={setValue}
      id='phone'
      name='phone'
      label='Phone input'
    />
  )
}

export const phone = () => <Example />
