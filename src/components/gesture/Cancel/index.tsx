import { animated, useSpring } from '@react-spring/web'

import { useDrag } from '@use-gesture/react'

import classes from './classes'

const colors = {
  cancel: '#ffb6c1',
  active: '#91c9f9',
}

export const Cancel = () => {
  const [style, spring] = useSpring(() => ({
    x: 0,
    backgroundColor: colors.active,
  }))

  const bind = useDrag(({ active, cancel, canceled, first, movement }) => {
    const mx = movement[0]

    if (Math.abs(mx) > 100) {
      cancel()
    }

    if (canceled) {
      spring.start({ backgroundColor: colors.cancel })
    } else if (first) {
      spring.start({ backgroundColor: colors.active })
    }

    spring.start({ x: active ? mx : 0, immediate: active })
  })

  return <animated.div className={classes.box()} {...bind()} style={style} />
}
