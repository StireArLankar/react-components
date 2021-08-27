import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    controls: {
      position: 'absolute',
      display: 'flex',
      width: '100%',
      bottom: 0,
      right: 0,
      left: 0,
      background: theme.custom.blue,
      height: 5,
      [theme.breakpoints.up('md')]: {
        height: 8,
      },
    },
    fill: {
      backgroundColor: theme.custom.darkBlue,
      height: '100%',
      width: '200%',
      position: 'absolute',
      left: '-100%',
    },
  })
)
