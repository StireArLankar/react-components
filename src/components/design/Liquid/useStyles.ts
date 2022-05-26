import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      position: 'relative',
      padding: theme.spacing(2, 5),
      textDecoration: 'none',
      textTransform: 'uppercase',
      overflow: 'hidden',
      display: 'flex',
      border: 'none',
      outline: 'none',
    },
    text: {
      position: 'relative',
      zIndex: 1,
      color: theme.custom.text,
      fontSize: 20,
      letterSpacing: 8,
      flexGrow: 1,
      pointerEvents: 'none',
      userSelect: 'none',
    },
    liquid: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      paddingTop: '100%',
      backgroundColor: '#4973ff',
      boxShadow: 'inset 0px 0px 50px rgba(0, 0, 0, 0.5)',
      transition: 'transform 0.5s ease',
      transform: 'translateY(40%)',

      '&:hover': {
        transform: 'translateY(0px)',
      },

      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        width: '200%',
        paddingTop: '200%',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -75%)',
      },
      '&::before': {
        borderRadius: '45%',
        background: 'rgba(20, 20, 20, 1)',
        animation: '$animate 5s linear infinite',
      },
      '&::after': {
        borderRadius: '40%',
        background: 'rgba(20, 20, 20, 0.5)',
        animation: '$animate 10s linear infinite',
      },
    },
    '@keyframes animate': {
      from: {
        transform: 'translate(-50%, -75%) rotate(deg)',
      },
      to: {
        transform: 'translate(-50%, -75%) rotate(360deg)',
      },
    },
  })
)
