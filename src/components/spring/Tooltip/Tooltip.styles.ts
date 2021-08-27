import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    popup: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1,
      width: '100%',
    },
    top: {
      bottom: `100%`,
      paddingBottom: theme.spacing(1.5),
    },
    bottom: {
      top: `100%`,
      paddingTop: theme.spacing(1.5),
    },
    content: {
      borderRadius: 4,
      color: theme.custom.text,
      background: theme.custom.light,
      boxShadow: '0 3px 10px 0 rgba(0,0,0,0.2)',
      textAlign: 'center',
      fontSize: 14,
      padding: theme.spacing(2, 3),
      border: `1px solid hsla(0,0%,100%,.1)`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      '&::before': {
        content: "''",
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        border: `10px solid transparent`,
      },
      '$top &::before': {
        top: 'calc(100% - 1px)',
        borderBottomWidth: 0,
        borderTopColor: theme.custom.light,
      },
      '$bottom &::before': {
        bottom: 'calc(100% - 1px)',
        borderTopWidth: 0,
        borderBottomColor: theme.custom.light,
      },
    },
  })
)
