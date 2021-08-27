import React from 'react'

import { text, boolean } from '@storybook/addon-knobs'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { MorphArrow } from './Arrow'

import { Accordion, AccordionProps } from '.'

export default {
  title: 'Spring/Accordion',
  component: Accordion,
  decorators: [withCenteredStyle({ width: 600 }), withCustomTheme],
}

export const accordion = () => {
  const props: AccordionProps = {
    title: text('title', 'Title'),
    hideArrow: boolean('hideArrow', false),
  }

  const height = 300
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Accordion {...props}>
        <div style={{ height, backgroundColor: 'grey' }} />
      </Accordion>
      <div style={{ height: 10, backgroundColor: 'red' }} />
    </div>
  )
}

export const accordionWithMorph = () => {
  const props: AccordionProps = {
    title: text('title', 'Title'),
    arrowComponent: MorphArrow,
  }

  const height = 300
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Accordion {...props}>
        <div style={{ height, backgroundColor: 'grey' }} />
      </Accordion>
      <div style={{ height: 10, backgroundColor: 'red' }} />
    </div>
  )
}
