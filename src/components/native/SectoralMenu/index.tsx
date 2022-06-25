import { useState } from 'react'

import classes from './_classes.css'

export type SectoralMenuProps = {
  buttons: SectoralButtonModel[]
}

export type SectoralButtonModel = {
  onClick: () => void
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

const getSkew = (length: number) => 90 - 190 / length
const getItemRotation = (index: number, length: number) =>
  index * (190 / length) - 5
const getButtonRotation = (length: number) => 90 - 190 / (length * 2)

const getItemStyle = (index: number, length: number) => ({
  transform: `rotate(${getItemRotation(index, length)}deg) skew(${getSkew(
    length
  )}deg)`,
})

const getButtonStyle = (length: number) => ({
  transform: `skew(-${getSkew(length)}deg) rotate(-${getButtonRotation(
    length
  )}deg) scale(1)`,
})

export const SectoralMenu = (props: SectoralMenuProps) => {
  const { buttons } = props

  const length = buttons.length

  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const renderButtons = () =>
    buttons.map(({ Icon, ...rest }, index) => (
      <li
        key={index}
        className={classes.item()}
        style={getItemStyle(index, length)}
      >
        <button
          {...rest}
          className={classes.itemButton}
          style={getButtonStyle(length)}
        >
          <Icon className={classes.icon} />
        </button>
      </li>
    ))

  return (
    <div className={classes.wrapper}>
      <button className={classes.button} onClick={toggleMenu}>
        +
      </button>
      <div className={classes.listWrapper({ open: isOpen })}>
        <ul className={classes.list}>{renderButtons()}</ul>
      </div>
    </div>
  )
}
