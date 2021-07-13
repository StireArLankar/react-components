import React, { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useCycle,
} from 'framer-motion'
import useMeasure from 'react-use-measure'
import Goo from 'gooey-react'

import { ReactComponent as Logo1 } from './codesandbox-logo.svg'
import { ReactComponent as Logo2 } from './framer-logo.svg'
import { ReactComponent as Logo3 } from './github-logo.svg'
import { ReactComponent as Logo4 } from './stitches-logo.svg'
import { ReactComponent as Logo5 } from './cross-circled.svg'

const xInput = [-100, 0, 100]

const logos = [
  <Logo1 width={40} height={40} />,
  <Logo2 width={40} height={40} />,
  <Logo3 width={40} height={40} />,
  <Logo4 width={40} height={40} />,
  <Logo5 width={40} height={40} />,
]

export default () => {
  const [ref, { width }] = useMeasure({ debounce: 100 })

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        maxWidth: 400,
        color: 'black',
      }}
    >
      {width > 0 ? <Inner width={width} /> : null}
    </div>
  )
}

const Inner = ({ width }: { width: number }) => {
  const spr = useSpring(0, { damping: 15 })

  const [state, setState] = useState(-1)

  const color = useTransform(spr, xInput, ['#d4e9ff', '#ffffff', '#ffd4eb'])

  const y1 = useSpring(0, { damping: 15, stiffness: 150 })
  const y2 = useSpring(0, { damping: 15, stiffness: 150 })
  const y3 = useSpring(0, { damping: 15, stiffness: 150 })
  const y4 = useSpring(0, { damping: 15, stiffness: 150 })
  const y5 = useSpring(0, { damping: 15, stiffness: 150 })

  const ys = [y1, y2, y3, y4, y5]

  const getLeft = (index: number) => {
    if (state === -1) {
      return (width / logos.length) * index
    }

    if (state === index) {
      return (width / logos.length) * index
    }

    return (
      (width / logos.length) * index -
      ((index - state) * width) / (logos.length * 4)
    )
  }

  const renderItem = (index: number) => (
    <motion.div
      key={index}
      onTap={() => {
        spr.set(0)
        ys[index].set(0)
        setState(-1)
      }}
      onTapStart={() => {
        spr.set(index % 2 === 1 ? 100 : -100)
        ys[index].set(-100)
        setState(index)
      }}
      onTapCancel={() => {
        spr.set(0)
        ys[index].set(0)
        setState(-1)
      }}
      style={{
        left: 0,
        width: width / logos.length,
        position: 'absolute',
      }}
      initial={{ x: getLeft(index) }}
      animate={{ x: getLeft(index) }}
      transition={{ type: 'spring', damping: 15 }}
    >
      <Goo intensity='strong'>
        <motion.div
          style={{
            backgroundColor: color,
            position: 'absolute',
            height: 60,
            width: 40,
            left: '50%',
            top: 0,
            transform: 'translateX(-50%)',
            zIndex: -1,
            borderRadius: 10,
          }}
        />
        <motion.div
          style={{
            display: 'flex',
            y: ys[index],
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            height: 60,
            top: 0,
            left: 0,
          }}
        >
          <motion.div
            style={{
              backgroundColor: color,
              position: 'absolute',
              height: 60,
              width: 60,
              left: '50%',
              top: 0,
              marginLeft: -30,
              borderRadius: '50%',
              zIndex: -1,
            }}
          />
          <motion.div
            style={{
              backgroundColor: color,
              position: 'absolute',
              height: 45,
              width: 45,
              left: '50%',
              borderRadius: '50%',
              zIndex: -1,
              // eslint-disable-next-line react-hooks/rules-of-hooks
              y: useTransform(ys[index], (val) => val / 2 + 50),
              x: '-50%',
            }}
          />
          <motion.div
            style={{
              backgroundColor: color,
              position: 'absolute',
              height: 30,
              width: 30,
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              zIndex: -1,

              // eslint-disable-next-line react-hooks/rules-of-hooks
              y: useTransform(ys[index], (val) => val + 100),
              x: '-50%',
            }}
          />
          <motion.div
            style={{
              backgroundColor: color,
              position: 'absolute',
              height: 15,
              width: 15,
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              zIndex: -1,

              // eslint-disable-next-line react-hooks/rules-of-hooks
              y: useTransform(ys[index], (val) => val + 100 + 20),
              x: '-50%',
            }}
          />
        </motion.div>
      </Goo>

      <motion.div
        style={{
          display: 'flex',
          y: ys[index],
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {logos[index]}
      </motion.div>
    </motion.div>
  )

  return (
    <>
      <motion.div
        style={{
          backgroundColor: color,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          borderTopLeftRadius: useTransform(
            spr,
            (val) => Math.abs(val / 5) + 5
          ),
          borderTopRightRadius: useTransform(
            spr,
            (val) => Math.abs(val / 5) + 5
          ),
          scaleX: useTransform(spr, (val) => (1000 - Math.abs(val)) / 1000),
        }}
      />

      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          position: 'relative',
          height: 60,
          zIndex: 1,
        }}
      >
        {logos.map((_, i) => renderItem(i))}
      </motion.div>
    </>
  )
}
