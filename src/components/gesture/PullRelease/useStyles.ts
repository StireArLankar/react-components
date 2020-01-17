import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      background: '#91c9f9',
      borderRadius: 16,
      height: 80,
      width: 80,
      zIndex: 10000,
      cursor: 'grab',
    },
  })
)

export default useStyles
