import React, { useState, memo } from 'react'
import { useStyles } from './useStyles'
import useMeasure from 'react-use-measure'

export interface OverflowProps {
  text: string
}

export const Overflow = memo((props: OverflowProps) => {
  const { text } = props
  const [isHovered, setIsHovered] = useState(false)
  const classes = useStyles()
  const [ref, { width, height }] = useMeasure()

  const spanWidth = (text.length * height) / 1.6

  const duration = (spanWidth - width) / 140

  const styles = {
    transition: isHovered
      ? `transform ${duration}s cubic-bezier(0.17, 0.0, 0.50, 0.50)`
      : '',
    transform: isHovered ? `translateX(calc(-100% + ${width}px))` : '',
    display: isHovered ? 'inline-block' : '',
  }

  return (
    <div
      className={classes.wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.overflow} ref={ref}>
        <span className={classes.content} style={styles}>
          {text}
        </span>
      </div>
    </div>
  )
})
