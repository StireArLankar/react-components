import { useState } from 'react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import Component from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=p8CsotWUas0'>
      video
    </a>
  </>
)

export default {
  title: 'Radix/DropdownMenu',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      boxSizing: 'border-box',
      paddingTop: 60,
    }),
    withTopLabel(label),
  ],
}

const itemsMap: Record<string, string> = {
  '1': 'first item',
  '2': 'second item',
  '3': 'third item',
  '4': 'test',
  '5': 'test',
  '6': 'test',
  '7': 'test',
}

const items = Object.entries(itemsMap).map((item) => ({
  id: item[0],
  text: item[1],
}))

const Test = () => {
  const [value, setValue] = useState(items[0].text)

  const onSelect = (id: string) => {
    if (id === '3') {
      alert('hello world')
      return
    }

    const item = itemsMap[id]

    if (!item) {
      return
    }

    setValue(item)
  }

  return <Component caption={value} onSelect={onSelect} items={items} />
}

export const FramerMotion = () => <Test />
