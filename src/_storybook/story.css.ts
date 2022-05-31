import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: vars.color.dark,
})

export const content = style({
  width: 300,
  display: 'flex',
  justifyContent: 'center',
})

export const label = style({
  position: 'fixed',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: 10,
  zIndex: 1,
  backgroundColor: vars.color.light,
  color: vars.color.text,
  borderBottomRightRadius: 5,
  borderBottomLeftRadius: 5,
})
