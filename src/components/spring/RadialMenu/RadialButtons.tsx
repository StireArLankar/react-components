import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { useSpring, animated, config } from '@react-spring/web'

import classes from './_classes.css'

export interface RadialButtonsProps {
  buttons: RadialButtonModel[]
  isOpen: boolean
}

export interface RadialButtonModel {
  onClick: () => void
  Icon: (props: SvgIconProps) => JSX.Element
  color: string
}

const translate = (val: number, radians: number) =>
  `translate(${100 * val * Math.cos(radians)}px, ${
    100 * val * Math.sin(radians)
  }px)`

export const RadialButton = (
  props: RadialButtonModel & { angle: number; isOpen: boolean }
) => {
  const { angle, isOpen, Icon, color, onClick } = props

  const radians = (angle * 2 * Math.PI) / 360

  const { x } = useSpring({
    x: isOpen ? 1 : 0,
    config: config.slow,
  })

  return (
    <animated.li
      className={classes.animated}
      style={{ transform: x.to((val) => translate(val, radians)) }}
    >
      <button className={classes.radialButton} onClick={onClick}>
        <Icon className={classes.icon()} style={{ backgroundColor: color }} />
      </button>
    </animated.li>
  )
}

export const RadialButtons = (props: RadialButtonsProps) => {
  const { buttons, isOpen } = props

  const renderButtons = () =>
    buttons.map((button, index) => (
      <RadialButton
        key={index}
        isOpen={isOpen}
        angle={(360 * index) / buttons.length}
        {...button}
      />
    ))

  return <ul className={classes.list}>{renderButtons()}</ul>
}
