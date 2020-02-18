import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'grid',
      position: 'fixed',
      placeItems: 'center',
      background: 'currentColor',
    },
    scrub: {
      touchAction: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50vw',
      height: 16,
      borderRadius: 8,
      border: '1px solid white',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 20px 0px',
      background: 'linear-gradient(90deg, #833ab4 0%, #fcb045 100%)',
      userSelect: 'none',
    },
    control: {
      touchAction: 'none',
      height: 26,
      width: 26,
      borderRadius: 13,
      border: '3px solid white',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 4px 0px',
      userSelect: 'none',
      background: 'currentColor',
    },
  })
)

export default useStyles
