import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'fixed',
      left: '50%',
      userSelect: 'none',
      width: '100%',
      maxWidth: 600,
    },
    wrapperFilter: {
      filter: 'url(#goo)',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      bottom: 0,
    },
    planc: {
      width: '98%',
      top: -50,
      maxWidth: 600,
      background: 'var(--bg)',
      transform: 'translate(-50%, 50px)',
      position: 'absolute',
      left: '50%',
    },
    box: {
      borderRadius: 60,
      height: 250,
      width: 250,
      left: '50%',
      background: 'var(--bg)',
      userSelect: 'none',
      position: 'absolute',
      top: -50,
    },
  })
)

export default useStyles
