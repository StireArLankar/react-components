import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      position: 'relative',
      height: 200,
      overflow: 'hidden',

      [theme.breakpoints.up('md')]: {
        height: 300,
      },
    },
    slides: {
      height: '100%',
      width: '100%',
      display: 'flex',
      margin: 0,
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
      userSelect: 'none',
      listStyle: 'none',
    },
    item: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    item2: {
      width: '100%',
      height: '100%',
      flexShrink: 0,
      position: 'relative',
    },
    buttonsWrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -32px)',
      width: '100%',
      maxWidth: theme.breakpoints.values.xl,
      height: 0,
      zIndex: 10,
      marginTop: 0,
    },
  })
)
