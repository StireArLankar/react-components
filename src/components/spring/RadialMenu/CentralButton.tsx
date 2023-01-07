import { useSpring, animated } from '@react-spring/web'

import { Adjust, HighlightOff } from '~/components/material-svgs'

import classes from './_classes.css'

export interface CentralButtonProps {
  isOpen: boolean
  onClick: () => void
}

export const CentralButton = (props: CentralButtonProps) => {
  const { isOpen, onClick } = props

  const spring = useSpring({ s: isOpen ? 1 : 0 })

  return (
    <button onClick={onClick} className={classes.centralButton}>
      <animated.div
        style={{
          transform: spring.s.to((val) => `scale(${val})`),
          zIndex: isOpen ? 1 : 0,
        }}
        className={classes.animatedOverflow}
      >
        <HighlightOff className={classes.icon({ state: 'close' })} />
      </animated.div>
      <animated.div
        style={{
          transform: spring.s.to((val) => `scale(${1 - val})`),
          zIndex: isOpen ? 0 : 1,
        }}
        className={classes.animatedOverflow}
      >
        <Adjust className={classes.icon({ state: 'open' })} />
      </animated.div>
    </button>
  )
}
