import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      position: 'relative',
      userSelect: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 100px)',
      gridTemplateRows: 'repeat(4, 100px)',
      placeItems: 'center',
    },
    gridItem: {
      width: '95%',
      height: '95%',
      background: 'linear-gradient(-45deg, #c3cfe2 0%, #9cb8e4 100%)',
      border: '1px solid #f5576c',
    },
    item: {
      width: 86,
      height: 86,
      top: 7,
      left: 7,
      position: 'absolute',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      '&:last-child': {
        transform: 'translateX(-200px)',
      },
    },
  })
)

export default useStyles