import { useState } from 'react'

import Temp from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

const label = (
  <>
    <a
      className={storyLink}
      href='https://github.com/s-yadav/react-number-format'
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
