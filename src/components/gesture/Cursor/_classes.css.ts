import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const activeVariants = styleVariants({
  true: { color: 'white' },
  false: {},
})

const baseNavItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  fontSize: 20,
  zIndex: 11,
  color: 'black',
  transition: 'color 0.5s ease',
})

export default {
  wrapper: style({
    position: 'fixed',
    paddingTop: 50,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    cursor: 'none',
    display: 'flex',
    flexDirection: 'column',
  }),

  cursor: style({
    width: '3rem',
    height: '3rem',
    border: '2px solid black',
    borderRadius: '50%',
    willChange: 'transform',
    position: 'fixed',
    top: 0,
    left: 0,
    margin: '-1.5rem 0 0 -1.5rem',
    zIndex: 10,
    pointerEvents: 'none',
    backdropFilter: 'grayscale(1)',
  }),

  nav: style({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: '10vh',
    padding: `0 8px`,
    listStyle: 'none',
  }),

  navItem: recipe({
    base: baseNavItem,

    variants: { active: activeVariants },
  }),

  section: style({
    flexGrow: 1,
    position: 'relative',
  }),

  imgWrapper: style({
    position: 'absolute',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),

  img: style({
    objectFit: 'contain',
    height: '100%',
  }),
}
