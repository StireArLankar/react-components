import { css } from '@stitches/react'
import type { DecoratorFn } from '@storybook/react'

import { themeColors } from '~/theme/theme.styles'

export const withCenteredStyle =
  (style: React.CSSProperties = {}): DecoratorFn =>
  (storyfn) =>
    (
      <div className={classes.wrapper()}>
        <div className={classes.content()} style={style}>
          {storyfn()}
        </div>
      </div>
    )

const classes = {
  wrapper: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: themeColors.dark,
  }),

  content: css({
    width: 300,
    display: 'flex',
    justifyContent: 'center',
  }),
}
