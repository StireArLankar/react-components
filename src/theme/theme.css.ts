import {
  createThemeContract,
  createGlobalTheme,
  style,
  globalStyle,
} from '@vanilla-extract/css'

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

export const customScroll = style({
  selectors: {
    '&::-webkit-scrollbar': {
      backgroundColor: '#f1f1f1',
      WebkitOverflowScrolling: 'touch',
      height: 10,
      width: 10,
    },

    '&::-webkit-scrollbar:hover': {
      backgroundColor: '#e9e9e9',
      border: '1px solid #dbdbdb',
    },

    '&::-webkit-scrollbar-button:end:increment': {
      background: '0 0',
      display: 'block',
      height: 0,
    },
    '&::-webkit-scrollbar-button:start:decrement': {
      background: '0 0',
      display: 'block',
      height: 0,
    },

    '&::-webkit-scrollbar-track': {
      backgroundClip: 'padding-box',
      border: 'solid transparent',
    },

    '&::-webkit-scrollbar-track-piece': {
      backgroundColor: 'transparent',
      borderRadius: 0,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundClip: 'padding-box',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      border: 'none',
      boxShadow:
        'inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07)',
    },

    '&::-webkit-scrollbar-thumb:horizontal': {
      backgroundColor: '#bfbfbf',
      borderRadius: 0,
    },
    '&::-webkit-scrollbar-thumb:vertical': {
      backgroundColor: '#bfbfbf',
      borderRadius: 0,
    },

    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: 'rgba(0, 0, 0, 0.44)',
      boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, 0.33)',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#959595',
    },
  },
})

globalStyle(':root', {
  vars: { '--bg-color': 'rgb(145, 181, 240)' },
})

globalStyle('html', { height: '100%', boxSizing: 'border-box' })

globalStyle('body', {
  backgroundColor: 'var(--bg-color)',
  transition: 'background-color 0.3s ease-in-out',
  minWidth: 320,
  display: 'flex',
  minHeight: '100%',
  padding: '0 !important',
})

globalStyle('*', { boxSizing: 'inherit' })

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
})

globalStyle('.overflow', { overflowY: 'hidden', overflowX: 'hidden' })

export const storyLink = style({
  color: vars.color.orange,
  textDecoration: 'none',
})
