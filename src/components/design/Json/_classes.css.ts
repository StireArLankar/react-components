import { style } from '@vanilla-extract/css'

export default {
  main: style({
    lineHeight: 1.3,
    color: '#66d9ef',
    background: '#272822',
    width: 'max-content',
    minWidth: '100%',
    margin: 0,
    minHeight: '100%',
  }),
  key: style({ color: '#f92672' }),
  string: style({ color: '#fd971f' }),
  value: style({ color: '#a6e22e' }),
  boolean: style({ color: '#ac81fe' }),
}

export const acai = {
  main: style({ color: 'rgba(116,128,150,1)', background: '#1e1e1e' }),
  key: style({ color: 'rgba(181,83,191,1)' }),
  string: style({ color: 'rgba(251,168,86,1)' }),
  value: style({ color: 'rgba(147,163,191,1)' }),
  boolean: style({ color: 'rgba(68,138,169,1)' }),
}
