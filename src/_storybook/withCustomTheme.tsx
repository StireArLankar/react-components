import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { globalCss } from '@stitches/react'
import type { DecoratorFn } from '@storybook/react'

import { defaultTheme } from '~/theme/theme.styles'
import '~/theme/theme.css'

const globalStyles = globalCss({
  ':root': {
    '--bg-color': 'rgb(145, 181, 240)',
  },

  html: {
    height: '100%',
  },

  body: {
    backgroundColor: 'var(--bg-color)',
    transition: 'background-color 0.3s ease-in-out',
    minWidth: 320,
    display: 'flex',
    minHeight: '100%',
    padding: '0 !important',
  },

  '.overflow': {
    overflowY: 'hidden',
    overflowX: 'hidden',
  },

  '*': {
    boxSizing: 'border-box',
  },

  '#root': {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
})

globalStyles()

export const withCustomTheme: DecoratorFn = (storyfn) => (
  <CssBaseline>
    <MuiThemeProvider theme={defaultTheme}>{storyfn()}</MuiThemeProvider>
  </CssBaseline>
)
