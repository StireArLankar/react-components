import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Checkbox from '.'

const meta = {
  title: 'Design/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

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

      <Checkbox
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

export const Controlled: StoryObj<typeof Asd> = {
  render: (props) => <Asd {...props} />,
  args: {
    label: 'label',
    err: false,
    helper: 'helper',
  },
  argTypes: { helper: { control: 'text', if: { arg: 'err' } } },
}

export const Base: Story = {
  args: { id: '123', value: true },
  argTypes: { onChange: { action: 'onChange' } },
}
