import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { addToast } from './toasts'

import Component from '.'

export default {
  title: 'Radix/Toast',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      boxSizing: 'border-box',
    }),
  ],
}

const Test = () => (
  <div>
    <button onClick={() => addToast('info', 'info')}>info</button>
    <button onClick={() => addToast('error', 'error')}>error</button>
    <button onClick={() => addToast('success', 'success')}>success</button>

    <Component />
  </div>
)

export const FramerMotion = {
  render: () => <Test />,
}
