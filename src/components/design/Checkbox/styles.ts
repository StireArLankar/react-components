import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      appearance: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
      boxShadow: 'inset 0 0 0 2px currentColor',
      color: 'white',
      width: 18,
      height: 18,
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 7,
      flexShrink: 0,
      outline: 'none',
      transition: 'all 0.3s ease-in-out',
      '&:focus': {
        color: '#a3beff',
      },
    },
    label: {
      color: 'black',
      position: 'relative',
      display: 'inline-block',
      userSelect: 'none',
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      lineHeight: '16px',
    },
    indicator: {
      display: 'flex',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
    },
    checked: {
      opacity: 1,
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    helper: {
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      top: '100%',
      padding: '6px 8px',
      borderRadius: 8,
      width: '100%',
      left: 0,
      fontWeight: 700,
      fontSize: 12,
      minHeight: 29,
      color: 'white',
      overflow: 'hidden',
      zIndex: 1,

      '& > span': {
        zIndex: 1,
      },

      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'red',
        zIndex: 0,
        opacity: 0.8,
        borderRadius: 4,
      },
    },
  })
)
