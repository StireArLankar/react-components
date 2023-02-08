import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from './Modal'

export default {
  title: 'Spring/Modal',
  component: Component,
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const Modal = {}
