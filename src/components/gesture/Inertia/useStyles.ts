import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      userSelect: 'none',
    },
    box: {
      marginBottom: 20,
      width: '100%',
      height: '80vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      userSelect: 'none',
    },
  })
)

export default useStyles
