import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
    },
    background: {
      width: 80,
      height: 80,
      position: 'absolute',
      border: `1px solid ${theme.custom.border}`,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        background: theme.custom.light,
        transition: 'all 0.35s ease',
      },
      '&$active::before': {
        opacity: 1,
      },
    },
    active: {},
    box: {
      position: 'absolute',
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
