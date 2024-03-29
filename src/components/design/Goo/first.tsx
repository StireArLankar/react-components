import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export const Goo = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    style={{ display: 'none' }}
  >
    <defs>
      <filter id='shadowed-goo'>
        <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10' />
        <feColorMatrix
          in='blur'
          mode='matrix'
          values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
          result='goo'
        />
        <feGaussianBlur in='goo' stdDeviation='3' result='shadow' />
        <feColorMatrix
          in='shadow'
          mode='matrix'
          values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2'
          result='shadow'
        />
        <feOffset in='shadow' dx='1' dy='1' result='shadow' />
        <feComposite in2='shadow' in='goo' result='goo' />
        <feComposite
          in2='goo'
          in='SourceGraphic'
          result='mix'
          operator='atop'
        />
      </filter>
      <filter id='goo'>
        <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10' />
        <feColorMatrix
          in='blur'
          mode='matrix'
          values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -7'
          result='goo'
        />
        <feComposite
          in2='goo'
          in='SourceGraphic'
          result='mix'
          operator='atop'
        />
      </filter>
    </defs>
  </svg>
)

export default () => {
  const [{ xy }, spring] = useSpring(() => ({ xy: [0, 0] as [number, number] }))

  const bind = useDrag(({ offset: xy }) => {
    spring.start({ xy })
  })

  return (
    <>
      <Goo />
      <div
        style={{
          filter: 'url(#goo)',
          userSelect: 'none',
          display: 'grid',
          placeItems: 'center',
          minHeight: '100vh',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <animated.div
          {...bind()}
          style={{
            width: 100,
            height: 200,
            background: 'red',
            transform: xy.to(trans),
            userSelect: 'none',
            position: 'fixed',
            touchAction: 'none',
          }}
        />
        <div
          style={{
            width: 100,
            height: 100,
            background: 'red',
            transform: `translateX(-110%)`,
            userSelect: 'none',
          }}
        />
      </div>
    </>
  )
}

const trans = (...p: number[]) => `translate3d(${p[0]}px, ${p[1]}px, 0)`
