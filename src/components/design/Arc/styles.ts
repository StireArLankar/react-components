import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      animation: '$color 6s ease-in-out',
      animationIterationCount: 'infinite',
      display: 'grid',
      placeItems: 'center',
      '&::before': {
        position: 'fixed',
        content: "''",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'currentColor',
        opacity: 0.15,
      },
    },
    box: {
      width: 200,
      position: 'relative',
      marginBottom: 40,
      ['--start' as any]: -9.3,
      ['--end' as any]: 9.9,
      ['--s1' as any]: '-38%',
      ['--s2' as any]: '37%',
      WebkitBoxReflect:
        'below -32px linear-gradient(transparent, rgba(0, 0, 0, 0.4))',
      color: 'inherit',
    },
    root: {
      animation: `$anim 1.5s ease-in-out`,
      animationIterationCount: 'infinite',
      animationDirection: 'reverse',
      stroke: 'currentColor',
      strokeDasharray: 10,
      '&:nth-child(2)': {
        filter: 'blur(10px)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      },
    },

    '@keyframes anim': {
      from: {
        strokeDashoffset: `var(--start)`,
        transform: 'translateX(var(--s1))',
      },
      to: {
        strokeDashoffset: `var(--end)`,
        transform: 'translateX(var(--s2))',
      },
    },
    '@keyframes color': {
      '0%': {
        color: 'yellow',
      },
      '33%': {
        color: 'green',
      },
      '66%': {
        color: 'blue',
      },
      '100%': {
        color: 'yellow',
      },
    },
  })
)
