import { number } from '@storybook/addon-knobs'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { CircleBar } from '.'
import { themeColors } from '../../../theme/theme.styles'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { Ring, RingProps } from './progress-ring'
import Result from './result'

export default {
  title: 'Native|Circle Bar',
  decorators: [withCenteredStyle({ width: 500 }), withCustomTheme],
}

export const circleBar = () => <CircleBar />

export const result = () => {
  const progress = number('progress', 0)
  const props = {
    progress: Number(progress),
  }

  return (
    <div style={{ backgroundColor: themeColors.text }}>
      <Result {...props} />
    </div>
  )
}

export const ring = () => {
  const progress = number('progress', 0)
  const radius = number('radius', 200)
  const stroke = number('stroke', 30)

  const props: RingProps = {
    onRingClick: action('onRingClick'),
    progress: Number(progress),
    radius: Number(radius),
    stroke: Number(stroke),
  }

  return <Ring {...props} />
}
