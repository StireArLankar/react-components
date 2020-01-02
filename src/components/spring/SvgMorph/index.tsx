import React, { SVGProps } from 'react'
import { useSpring, animated } from 'react-spring'

export interface SvgMorphProps extends SVGProps<SVGSVGElement> {
  firstPath: string
  secondPath: string
  toggle: boolean
}

export const SvgMorph = (props: SvgMorphProps) => {
  const { firstPath, secondPath, toggle, ...rest } = props

  const spring = useSpring({
    d: toggle ? firstPath : secondPath,
  })

  return (
    <svg {...rest}>
      <animated.path {...spring} />
    </svg>
  )
}
