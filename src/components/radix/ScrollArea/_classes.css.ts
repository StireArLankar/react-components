import { style } from '@vanilla-extract/css'

const SCROLLBAR_SIZE = 10

const root = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

const viewport = style({
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
})

const scrollbar = style({
  zIndex: 100,

  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: `rgba(0, 0, 0, 0.1)`,
  transition: 'background 160ms ease-out',

  selectors: {
    '&:hover': { background: `rgba(0, 0, 0, 0.2)` },
    '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
      height: SCROLLBAR_SIZE,
    },
  },
})

const thumb = style({
  flex: 1,
  background: `rgba(40, 40, 0, 0.5)`,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    // minWidth: 44,
    // minHeight: 44,
  },
})

const corner = style({
  background: `rgba(0, 0, 0, 0.5)`,
})

export default {
  root,
  viewport,
  scrollbar,
  thumb,
  corner,
}
