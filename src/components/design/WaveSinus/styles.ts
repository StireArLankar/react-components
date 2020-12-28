import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const size = 120
export const color = '#ffab00'

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: size * 2.5,
      height: size,
      overflow: 'hidden',
    },
    bar: {
      position: 'absolute',
      top: 10,
      width: size / 10,
      height: '150%',
      transform: 'translateY(55%)',
      animation: '$motion 1.25s ease-in-out infinite',
    },
    '@keyframes motion': {
      '0%': {
        transform: 'translateY(55%)',
      },
      '50%': {
        transform: 'translateY(5%)',
      },
      '100%': {
        transform: 'translateY(55%)',
      },
    },
    barInner: {
      width: '100%',
      height: '100%',
      transform: 'skewY(0deg)',
      backgroundColor: color,
      animation: '$skew 1.25s ease-in-out infinite',
    },
    '@keyframes skew': {
      '0%': {
        transform: 'skewY(0deg)',
      },

      '25%': {
        transform: 'skewY(-40deg)',
      },

      '50%': {
        transform: 'skewY(0deg)',
      },

      '75%': {
        transform: 'skewY(40deg)',
      },

      '100%': {
        transform: 'skewY(0deg)',
      },
    },
  })
)
