import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles<Theme, { color: string }>((theme: Theme) =>
  createStyles({
    button: {
      position: 'relative',
      display: 'flex',
      padding: theme.spacing(3, 4),
      cursor: 'pointer',
      color: (props) => props.color,
      fontSize: 24,
      textTransform: 'uppercase',
      overflow: 'hidden',
      transition: '0.5s',
      letterSpacing: 4,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      WebkitBoxReflect: 'below 1px linear-gradient(transparent, #0005)',

      '&:hover': {
        backgroundColor: 'currentColor',
        boxShadow:
          '0 0 5px currentColor, 0 0 25px currentColor, 0 0 50px currentColor, 0 0 100px currentColor',
      },
    },
    text: {
      transition: '0.5s',
      color: (props) => props.color,
      '$button:hover &': {
        color: '#050801',
      },
    },

    tail: {
      position: 'absolute',
      display: 'block',
      '&:nth-child(1)': {
        top: 0,
        left: 0,
        transform: 'translateX(-100%)',
        width: '100%',
        height: 2,
        background: `linear-gradient(90deg, transparent, currentColor)`,
        animation: '$animate1 1s linear infinite',
      },
      '&:nth-child(2)': {
        top: 0,
        transform: 'translateY(-100%)',
        right: 0,
        height: '100%',
        width: 2,
        background: `linear-gradient(180deg, transparent, currentColor)`,
        animation: '$animate2 1s linear infinite',
        animationDelay: '0.25s',
      },
      '&:nth-child(3)': {
        bottom: 0,
        right: 0,
        transform: 'translateX(100%)',
        width: '100%',
        height: 2,
        background: `linear-gradient(270deg, transparent, currentColor)`,
        animation: '$animate3 1s linear infinite',
        animationDelay: '0.5s',
      },
      '&:nth-child(4)': {
        bottom: 0,
        left: 0,
        transform: 'translateY(100%)',
        height: '100%',
        width: 2,
        background: `linear-gradient(360deg, transparent, currentColor)`,
        animation: '$animate4 1s linear infinite',
        animationDelay: '0.75s',
      },
    },
    '@keyframes animate1': {
      '0%': {
        transform: 'translateX(-100%)',
      },
      '50%': {
        transform: 'translateX(100%)',
      },
      '100%': {
        transform: 'translateX(100%)',
      },
    },
    '@keyframes animate2': {
      '0%': {
        transform: 'translateY(-100%)',
      },
      '50%': {
        transform: 'translateY(100%)',
      },
      '100%': {
        transform: 'translateY(100%)',
      },
    },
    '@keyframes animate3': {
      '0%': {
        transform: 'translateX(100%)',
      },
      '50%': {
        transform: 'translateX(-100%)',
      },
      '100%': {
        transform: 'translateX(-100%)',
      },
    },
    '@keyframes animate4': {
      '0%': {
        transform: 'translateY(100%)',
      },
      '50%': {
        transform: 'translateY(-100%)',
      },
      '100%': {
        transform: 'translateY(-100%)',
      },
    },
  })
)

export default useStyles
