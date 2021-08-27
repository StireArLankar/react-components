import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      borderRadius: '50%',
      height: 120,
      width: 120,
      zIndex: 10000,
      cursor: 'grab',
    },
    svg: {
      width: '100%',
      height: '100%',
      color: theme.custom.border,
    },
    list: {
      position: 'absolute',
      padding: 0,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-around',
      height: '80vh',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: `calc(100% - 300px)`,
      listStyle: 'none',
      overflow: 'hidden',
    },
    item: {
      height: '100%',
      width: 20,
      transformOrigin: 'bottom',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      opacity: 0.8,
      '&:nth-child(5n)': {
        background: 'linear-gradient(180deg, #f093fb 0%, #f5576c 100%)',
      },
      '&:nth-child(5n + 1)': {
        background: 'linear-gradient(180deg, #a8edea 0%, #fed6e3 100%)',
      },
      '&:nth-child(5n + 2)': {
        background: 'linear-gradient(180deg, #d299c2 0%, #fef9d7 100%)',
      },
      '&:nth-child(5n + 3)': {
        background: 'linear-gradient(180deg, #ebc0fd 0%, #d9ded8 100%)',
      },
      '&:nth-child(5n + 4)': {
        background: 'linear-gradient(180deg, #f6d365 0%, #fda085 100%)',
      },
    },
  })
)

export default useStyles
