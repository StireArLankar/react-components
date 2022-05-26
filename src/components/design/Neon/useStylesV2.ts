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
        transitionDelay: '0.2s',
        backgroundColor: 'currentColor',
        boxShadow:
          '0 0 5px currentColor, 0 0 25px currentColor, 0 0 50px currentColor, 0 0 100px currentColor',
      },

      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        width: 10,
        height: 10,
        transition: '0.5s',
      },

      '&::before': {
        top: 0,
        left: 0,
        borderTop: `2px solid currentColor`,
        borderLeft: `2px solid currentColor`,
      },
      '&::after': {
        bottom: 0,
        right: 0,
        borderBottom: `2px solid currentColor`,
        borderRight: `2px solid currentColor`,
      },
      '&:hover::before, &:hover::after': {
        width: '100%',
        height: '100%',
      },
    },
    text: {
      transition: '0.5s',
      color: (props) => props.color,
      '$button:hover &': {
        transitionDelay: '0.2s',
        color: '#050801',
      },
    },
  })
)

export default useStyles
