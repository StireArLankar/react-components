import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    button: {
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      overflow: 'hidden',
      position: 'relative',
      padding: '18px 36px',
      color: 'white',
      textTransform: 'uppercase',
      fontSize: 18,
      lineHeight: 1,
      letterSpacing: '2px',
      borderRadius: 40,
      background: `linear-gradient(90deg, #0162c8, #55e7fc)`,
    },
    secondary: {
      background: `linear-gradient(90deg, #755bea, #ff72c0)`,
    },
    ripple: {
      position: 'absolute',
      background: 'white',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      borderRadius: '50%',
      animation: `$ripple 1s linear`,
    },
    '@keyframes ripple': {
      from: {
        width: 0,
        height: 0,
        opacity: 0.5,
      },
      to: {
        width: 500,
        height: 500,
        opacity: 0,
      },
    },
  })
)
