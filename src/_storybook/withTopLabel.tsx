import React, { Fragment } from 'react'
import { themeColors } from '../theme/theme.styles'

export const withTopLabel = (content: JSX.Element) => (fn: any) => (
  <Fragment>
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: 10,
        backgroundColor: themeColors.text,
        color: themeColors.dark,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
      }}
    >
      {content}
    </div>
    {fn()}
  </Fragment>
)
