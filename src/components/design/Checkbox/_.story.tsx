import { useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Temp from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Design/Checkbox',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'teal',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
} as ComponentMeta<typeof Asd>

type Props = {
  err: boolean
  label: string
  helper?: string
}

const Asd = (props: Props) => {
  const { err, label, helper } = props
  const [value, setValue] = useState(true)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gridGap: 10,
        minHeight: 80,
        alignItems: 'start',
      }}
    >
      <a href='#11'>for accessible</a>

      <Temp
        id='tmep'
        value={value}
        label={label}
        onChange={() => setValue((prev) => !prev)}
        error={err}
        helperText={err ? helper : ''}
      />

      <a href='#11'>for accessible</a>
    </div>
  )
}

const Template: ComponentStory<typeof Asd> = ({ ...rest }) => <Asd {...rest} />

export const Example = Template.bind({})

Example.argTypes = {
  helper: { control: 'text', if: { arg: 'err' } },
}

Example.args = {
  label: 'label',
  err: false,
  helper: 'helper',
}
