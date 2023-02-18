import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from './Pagination'

const meta = {
  title: 'Native/Pagination',
  component: Component,
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20, display: 'block' }),
    withCustomTheme,
  ],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

interface ControlledProps {
  totalPages: number
  itemsPerPage: number
}

const Controlled = (props: ControlledProps) => {
  const [page, setPage] = useState(1)

  return (
    <Component
      itemsPerPage={props.itemsPerPage}
      currentPage={page}
      itemsCount={props.totalPages * props.itemsPerPage}
      setPage={setPage}
    />
  )
}

export const Example: StoryObj<typeof Controlled> = {
  render: (args) => <Controlled {...args} />,
  args: { itemsPerPage: 10, totalPages: 10 },
}

export const Uncontrolled: Story = {
  args: {
    itemsPerPage: 10,
    currentPage: 0,
    itemsCount: 100,
    setPage: action('setPage'),
  },
}
