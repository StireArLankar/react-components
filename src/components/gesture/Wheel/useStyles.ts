import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      borderRadius: '50%',
      height: 120,
      width: 120,
      zIndex: 10000,
      cursor: 'grab',
    },
    svg: {
      width: '100%',
      height: '100%',
      color: theme.custom.border,
    },
  })
)

export default useStyles
