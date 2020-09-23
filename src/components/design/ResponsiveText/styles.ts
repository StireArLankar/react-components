import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    bold: {
      fontSize: 30,
      lineHeight: 1,
      fontWeight: 700,
      fontFamily: 'Roboto',
    },
    regular: {
      fontSize: 30,
      lineHeight: 1,
      fontWeight: 400,
      fontFamily: 'Roboto',
    },
  })
)
