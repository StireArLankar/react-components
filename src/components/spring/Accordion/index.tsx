import { useState, PropsWithChildren } from 'react'
import useMeasure from 'react-use-measure'

import { useSpring, animated } from '@react-spring/web'

import * as classes from './_classes.css'
import { SimpleArrow, ArrowProps } from './Arrow'

export interface AccordionProps {
  title: string
  hideArrow?: boolean
  arrowComponent?: (props: ArrowProps) => JSX.Element
}

export const Accordion = (props: PropsWithChildren<AccordionProps>) => {
  const { title, children, hideArrow, arrowComponent } = props

  const [isOpened, setIsOpened] = useState(true)

  const [ref, { height }] = useMeasure()

  const adjustedHeight = isOpened && height === 0 ? undefined : height

  const onToggleClick = () => setIsOpened((prev) => !prev)

  const animProps = useSpring({
    height: isOpened ? adjustedHeight : 0,
    opacity: isOpened ? 1 : 0,
  })

  const renderArrow = () => {
    if (hideArrow) {
      return null
    }

    return arrowComponent ? (
      arrowComponent({ isOpened })
    ) : (
      <SimpleArrow isOpened={isOpened} />
    )
  }

  return (
    <div className={classes.wrapper({ open: isOpened })}>
      <button className={classes.toggle} onClick={onToggleClick}>
        <div className={classes.title}>{title}</div>
        {renderArrow()}
      </button>

      <animated.div style={animProps} className={classes.content}>
        <div ref={ref}>{children}</div>
      </animated.div>
    </div>
  )
}
