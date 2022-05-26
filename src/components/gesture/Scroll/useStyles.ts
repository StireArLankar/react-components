import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      background: theme.custom.border,
      position: 'fixed',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '5%',
      right: '5%',
      borderRadius: 10,
      height: 80,
      overflow: 'hidden',
    },
    progress: {
      background: theme.custom.red,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      borderRadius: 10,
      opacity: '.8',
    },
    scrollArea: {
      backgroundColor: theme.custom.main,
      maxHeight: '50vh',
      width: '100%',
      overflowY: 'scroll',
    },
    scrollInner: {
      height: '400vh',
    },
  })
)

export default useStyles
