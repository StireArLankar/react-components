import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      width: 320,
      height: 240,
      userSelect: 'none',
    },
    item: {
      position: 'absolute',
      width: 320,
      height: 90,
      overflow: 'visible',
      pointerEvents: 'auto',
      transformOrigin: '50% 50% 0px',
      borderRadius: 5,
      color: 'white',
      lineHeight: '90px',
      paddingLeft: 32,
      fontSize: 14.5,
      background: 'lightblue',
      textTransform: 'uppercase',
      letterSpacing: 2,

      '&:nth-child(1)': {
        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      },
      '&:nth-child(2)': {
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      },
      '&:nth-child(3)': {
        background: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
      },
      '&:nth-child(4)': {
        background: 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
      },
    },
  })
)

export default useStyles
