import { createMuiTheme } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'

const green = '#65b300'

export const themeColors = {
  orange: '#ff9a01',
  red: '#f12a4e',

  blue: '#27d2f2',
  darkBlue: '#1462ef',

  main: '#353556',
  light: '#3c3c5b',
  border: '#595980',
  dark: '#242447',
  text: '#f1f1f4',

  darkGreen: '#335a00',
  green,
  online: green,
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string
    }
    custom: {
      orange: string
      red: string

      blue: string
      darkBlue: string

      main: string
      light: string
      border: string
      dark: string
      text: string

      darkGreen: string
      green: string
      online: string
    }
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
    custom?: {
      orange?: string
      red?: string

      blue?: string
      darkBlue?: string

      main?: string
      light?: string
      border?: string
      dark?: string
      text?: string

      darkGreen?: string
      green?: string
      online?: string
    }
  }
}

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#353556',
      light: '#595980',
      dark: '#242447',
      contrastText: '#f1f1f4',
    },
    secondary: {
      main: '#9f9f9f',
    },
    background: {},
    action: {
      hover: themeColors.orange,
    },
  },
  status: {
    danger: orange[500],
  },
  custom: themeColors,
})
