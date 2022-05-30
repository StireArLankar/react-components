import { style } from '@vanilla-extract/css'

export const wrapper = style({
  position: 'relative',
  width: 500,
  height: 500,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
})

export const content = style({
  position: 'absolute',
  top: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
})

export const constrains = style({
  position: 'absolute',
  width: 'calc(100% + 20px)',
  height: 'calc(100% + 20px)',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
})

export const svg = style({
  width: 700,
  height: 700,
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  userSelect: 'none',
})

export const circle = style({
  touchAction: 'none',
})
