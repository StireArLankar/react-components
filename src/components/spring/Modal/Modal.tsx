import React, { MouseEvent, PropsWithChildren, useState } from 'react'
import { createPortal } from 'react-dom'
import { animated, useTransition } from '@react-spring/web'

import useStyles from './Modal.styles'

import { LiquidButton } from '~/components/design/Liquid/LiquidButton'
import { NeonButton } from '~/components/design/Neon/NeonButton'

export interface ModalProps {
  show: boolean
  onBackdropClick?: () => void
}

const BodyPortal = ({ children }: PropsWithChildren<{}>) =>
  createPortal(children, document.body)

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { show, onBackdropClick, children } = props

  const modalTransition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, pointerEvents: 'none' },
  })

  const stopProp = (evt: MouseEvent) => evt.stopPropagation()

  const classes = useStyles()

  return (
    <BodyPortal>
      {modalTransition((props, item, _, key) => {
        return item ? (
          <animated.div
            className={classes.backdrop}
            key={key}
            style={props}
            onClick={onBackdropClick}
            aria-modal='true'
            role='dialog'
          >
            <div className={classes.card} onClick={stopProp}>
              {children}
            </div>
          </animated.div>
        ) : null
      })}
    </BodyPortal>
  )
}

export const Temp = () => {
  const [show, set] = useState(false)

  const closeModal = () => set(false)
  const openModal = () => set(true)

  return (
    <div
      style={{
        position: 'fixed',
        display: 'grid',
        placeItems: 'center',
        minHeight: '100vh',
        width: '100%',
        top: 0,
      }}
    >
      <Modal show={show} onBackdropClick={closeModal}>
        <div style={{ height: '100%' }}>
          <LiquidButton onClick={closeModal}>Close</LiquidButton>
        </div>
      </Modal>
      <NeonButton onClick={openModal}>Toggle</NeonButton>
    </div>
  )
}
