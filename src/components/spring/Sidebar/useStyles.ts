import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      top: 0,
      left: 0,
      bottom: 0,
      width: 300,
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.custom.light,
      boxShadow: '1px 0 10px rgba(0, 0, 0, 0.25)',
      padding: theme.spacing(2),
      overflowY: 'auto',
      overflowX: 'hidden',
      '&.right': {
        left: 'auto',
        right: 0,
      },
    },
    item: {
      marginTop: theme.spacing(1),

      '&:first-child': {
        marginTop: 0,
      },
    },
  })
)

export default useStyles
