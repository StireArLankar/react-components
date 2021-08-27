import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      filter: 'url(#goo)',
      position: 'fixed',
      left: '50%',
      userSelect: 'none',
    },
    planc: {
      width: '110vw',
      background: 'red',
      transform: 'translate(-50%, 50px)',
      position: 'absolute',
      bottom: 0,
    },
    box: {
      borderRadius: 50,
      height: 200,
      width: 200,
      background: 'red',
      userSelect: 'none',
      position: 'absolute',
      top: -100,
    },
    rotation: {
      padding: 10,
      position: 'relative',
      animationName: '$rotate',
      animationDuration: '5s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    },
    '@keyframes rotate': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  })
)

export default useStyles
