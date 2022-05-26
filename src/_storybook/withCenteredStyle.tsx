import React from 'react'

import { themeColors } from '~/theme/theme.styles'

export const withCenteredStyle =
  (style: React.CSSProperties = {}) =>
  (storyfn: any) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: themeColors.dark,
        }}
      >
        <div
          style={{
            width: 300,
            display: 'flex',
            justifyContent: 'center',
            ...style,
          }}
        >
          {storyfn()}
        </div>
      </div>
    )
  }
