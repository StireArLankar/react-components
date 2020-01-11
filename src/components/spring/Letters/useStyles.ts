import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontSize: 30,
      color: theme.custom.text,
    },
    char: {
      display: 'inline-block',
      minWidth: 8,
      willChange: 'transform',
      letterSpacing: '0.1em',
    },
  })
)

export default useStyles
