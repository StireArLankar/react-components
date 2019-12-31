import { themeColors } from './../../../theme/theme.styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: themeColors.light,
    },
    bouncer: {
      width: 50,
      height: 50,
      backgroundColor: themeColors.blue,
      borderRadius: '50%',
      position: 'absolute',
    },
  })
)
