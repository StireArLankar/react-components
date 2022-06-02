import { Card } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Card',
  decorators: [withCenteredStyle({ width: 200 }), withCustomTheme],
}

export const card = () => <Card />
