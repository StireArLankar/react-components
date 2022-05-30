import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css'

export const vars = createThemeContract({
  color: {
    orange: null,
    red: null,
    blue: null,
    darkBlue: null,
    main: null,
    light: null,
    border: null,
    dark: null,
    text: null,
    darkGreen: null,
    green: null,
    online: null,
  },
})

createGlobalTheme(':root', vars, {
  color: {
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
    green: '#65b300',
    online: '#65b300',
  },
})
