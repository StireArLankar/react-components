import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    anchor: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    popup: {
      position: 'absolute',
      willChange: 'transform',
      zIndex: 1,
      width: 208,
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

      '&::before': {
        content: "''",
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        border: `10px solid transparent`,
      },
    },
    top: {
      // bottom: `calc(100% + ${theme.spacing(2)}px)`,
      '&::before': {
        top: 'calc(100% - 1px)',
        borderBottomWidth: 0,
        borderTopColor: theme.custom.light,
      },
    },
    bottom: {
      // top: `calc(100% + ${theme.spacing(2)}px)`,
      '&::before': {
        bottom: 'calc(100% - 1px)',
        borderTopWidth: 0,
        borderBottomColor: theme.custom.light,
      },
    },
  })
)
