import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      width: 100,
      height: 100,
      display: 'inline-block',
      top: 4,
    },
    heart: {
      position: 'absolute',
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '2900%',
      height: 300,
      width: 300,
      left: '-100%',
      top: '-100%',
    },
    animation: {
      animationName: '$heartBlast',
      animationDuration: '.8s',
      animationIterationCount: 1,
      animationTimingFunction: 'steps(28)',
      backgroundPosition: 'right',
    },
    '@keyframes heartBlast': {
      from: {
        backgroundPosition: 'left',
      },
      to: {
        backgroundPosition: 'right',
      },
    },
  })
)

export default useStyles
