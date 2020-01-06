import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      backgroundColor: theme.custom.main,
      display: 'flex',
      position: 'relative',
      width: '100%',
    },
    item: {
      flexBasis: 0,
      flexGrow: 1,
      padding: theme.spacing(1, 2),
      color: theme.custom.text,
      fontSize: 20,
      textAlign: 'center',
      '&:not(:first-child)': {
        borderLeft: `1px solid ${theme.custom.border}`,
      },
    },
    popover: {
      position: 'absolute',
      top: '100%',
      left: 0,
      transformOrigin: 'top',
      backgroundColor: theme.custom.border,
      borderRadius: 10,
      overflow: 'hidden',
      '& > *': {
        padding: theme.spacing(1, 0),
        margin: theme.spacing(0, 1),
        position: 'relative',
      },
    },
  })
)
