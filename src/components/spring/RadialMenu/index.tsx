import { useSpring, animated, config } from '@react-spring/web'

import classes from './_classes.css'
import { CentralButton } from './CentralButton'
import { RadialButtonModel, RadialButtons } from './RadialButtons'

export interface RadialMenuProps {
  isOpen: boolean
  buttons: RadialButtonModel[]
  onClick: () => void
}

export const RadialMenu = (props: RadialMenuProps) => {
  const { isOpen, buttons, onClick } = props

  const style = useSpring({
    rotate: isOpen ? 720 : 0,
    config: config.slow,
  })

  return (
    <animated.div className={classes.wrapper} style={style}>
      <CentralButton isOpen={isOpen} onClick={onClick} />
      <RadialButtons isOpen={isOpen} buttons={buttons} />
    </animated.div>
  )
}
