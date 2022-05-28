import { css } from '@stitches/react'
import type { DecoratorFn } from '@storybook/react'

import { themeColors } from '~/theme/theme.styles'

export const withTopLabel =
  (content: JSX.Element): DecoratorFn =>
  (fn) =>
    (
      <>
        <div className={classes.label()}>{content}</div>
        {fn()}
      </>
    )

const classes = {
  label: css({
    position: 'fixed',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: 10,
    zIndex: 1,
    backgroundColor: themeColors.light,
    color: themeColors.text,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  }),
}
