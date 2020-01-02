import React from 'react'

import { SvgMorph, SvgMorphProps } from '.'

const paths = {
  firstPath: 'M18 10L10 2L2 10',
  secondPath: 'M18 2L10 10L2 2',
}

export interface SvgProps {
  toggle: boolean
  onClick?: () => void
  className?: string
}

export const Svg = (props: SvgProps) => {
  const combinedProps: SvgMorphProps = {
    ...props,
    ...paths,
    viewBox: '0 0 20 12',
    strokeLinejoin: 'round',
    strokeWidth: '2',
    stroke: 'currentColor',
    fill: 'transparent',
    strokeLinecap: 'round',
  }

  return <SvgMorph {...combinedProps} />
}
