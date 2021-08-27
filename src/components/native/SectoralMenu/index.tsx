import React, { useState } from 'react'
import clsx from 'clsx'
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon'

import { useStyles } from './useStyles'

export interface SectoralMenuProps {
  buttons: SectoralButtonModel[]
}

export interface SectoralButtonModel {
  onClick: () => void
  Icon: (props: SvgIconProps) => JSX.Element
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

  const classes = useStyles()

  const renderButtons = () =>
    buttons.map(({ Icon, ...rest }, index) => (
      <li
        key={index}
        className={classes.item}
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

  const listWrapperClass = clsx({
    [classes.listWrapper]: true,
    [classes.opened]: isOpen,
  })

  return (
    <div className={classes.wrapper}>
      <button className={classes.button} onClick={toggleMenu}>
        +
      </button>
      <div className={listWrapperClass}>
        <ul className={classes.list}>{renderButtons()}</ul>
      </div>
    </div>
  )
}
