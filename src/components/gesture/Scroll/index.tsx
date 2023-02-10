import { useSpring, animated } from '@react-spring/web'
import { useScroll } from '@use-gesture/react'

import classes from './_classes.css'

export const Scroll = () => {
  const [{ width }, spring] = useSpring(() => ({ width: '0%' }))

  const height = document.documentElement.scrollHeight

  // const bind = useScroll(
  useScroll(
    ({ xy: [, y] }) => spring.start({ width: (y / height) * 100 + '%' }),
    // FIXME
    { target: window }
  )

  // useEffect(() => {
  //   bind()
  // }, [bind])

  return (
    <div className={classes.wrapper}>
      <animated.div style={{ width }} className={classes.progress} />
    </div>
  )
}
