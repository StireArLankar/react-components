/* eslint-disable jsx-a11y/accessible-emoji */
import React, { FC, memo, useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'

import { animated, useSpring } from '@react-spring/web'

import classes from './_classes.css'
import * as Icons from './icons'

interface TreeProps {
  name: string | React.ReactElement
  style?: React.CSSProperties
  defaultOpen?: boolean
}

const getIcon = (children: any, isOpen?: boolean) => {
  if (!children) {
    return Icons.CloseSquareO
  }

  return isOpen ? Icons.MinusSquareO : Icons.PlusSquareO
}

const trans = (val: number) => `translate3d(${20 - 20 * val}px,0,0)`

const Tree: FC<TreeProps> = memo((props) => {
  const { children, name, style, defaultOpen = false } = props

  const [isOpen, setOpen] = useState(defaultOpen)
  const toggle = () => setOpen((prev) => !prev)

  const previous = usePrevious(isOpen)

  const [ref, { height: viewHeight }] = useMeasure()

  const { height, opacity } = useSpring({
    height: isOpen ? viewHeight : 0,
    opacity: isOpen ? 1 : 0,
  })

  const Icon = getIcon(children, isOpen)

  return (
    <div className={classes.frame}>
      <Icon className={classes.toggle} onClick={toggle} />

      <span className={classes.title} style={style}>
        {name}
      </span>

      <animated.div
        className={classes.content}
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}
      >
        <animated.div style={{ transform: opacity.to(trans) }} ref={ref}>
          {children}
        </animated.div>
      </animated.div>
    </div>
  )
})

export default () => (
  <>
    <Tree name='main' defaultOpen>
      <Tree name='hello' />
      <Tree name='subtree with children'>
        <Tree name='hello' />
        <Tree name='sub-subtree with children'>
          <Tree name='child 1' style={{ color: '#37ceff' }} />
          <Tree name='child 2' style={{ color: '#37ceff' }} />
          <Tree name='child 3' style={{ color: '#37ceff' }} />
          <Tree name='custom content'>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 200,
                padding: 10,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'black',
                  borderRadius: 5,
                }}
              />
            </div>
          </Tree>
        </Tree>
        <Tree name='hello' />
      </Tree>
      <Tree name='world' />
      <Tree name={<span>🙀 something something</span>} />
    </Tree>
  </>
)

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(value)

  useEffect(() => void (ref.current = value), [value])

  return ref.current
}
