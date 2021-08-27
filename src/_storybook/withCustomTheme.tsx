import React from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { defaultTheme } from 'theme/theme.styles'

import '../App.scss'

export const withCustomTheme = (storyfn: any) => (
  <CssBaseline>
    <MuiThemeProvider theme={defaultTheme}>{storyfn()}</MuiThemeProvider>
  </CssBaseline>
)
