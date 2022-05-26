import React from 'react'

import { boolean } from '@storybook/addon-knobs'

import { NestedNeumorphism } from './Nested'

import { Neumorphism, NeumorphismProps } from '.'

import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Design/Neumorphism',
  decorators: [
    (fn: any) => (
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'grid',
          placeItems: 'center',
          background:
            'linear-gradient(180deg, #F1F5F8 0%, #EBF3FA 0.01%, #DDE7F3 53.92%, #E6F0F9 100%)',
        }}
      >
        {fn()}
      </div>
    ),
    withCustomTheme,
  ],
}

export const example = () => {
  const props: NeumorphismProps = {
    isActive: boolean('active', false),
  }

  return <Neumorphism {...props} />
}

export const nested = () => <NestedNeumorphism />
