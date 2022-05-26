import React from 'react'

import { boolean } from '@storybook/addon-knobs'

import { Accordion } from '../Accordion'

import { Sidebar as MountedSidebar } from './MountedSidebar'
import { Sidebar as TransitionSidebar } from './TransitionSidebar'

import { Sidebar, SidebarProps } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Sidebar',
  decorators: [withCenteredStyle(), withCustomTheme],
}

const children = [
  <Accordion title='Content' key={1}>
    <div style={{ height: 100, backgroundColor: 'green' }} />
  </Accordion>,
  <div style={{ height: 100, backgroundColor: 'red' }} />,
  <div style={{ height: 50, backgroundColor: 'green' }} />,
  <Accordion title='Something'>
    <div style={{ height: 150, backgroundColor: 'blue' }} />
  </Accordion>,
  <div style={{ height: 50, backgroundColor: 'orange' }} />,
  <div style={{ height: 50, backgroundColor: 'rgba(150, 200, 50, 0.5)' }} />,
  <div style={{ height: 50, backgroundColor: 'rgba(150, 50, 150, 0.5)' }} />,
  <div style={{ height: 50, backgroundColor: 'rgba(50, 200, 200, 0.5)' }} />,
  <Accordion title='Something'>
    <div style={{ height: 50, backgroundColor: 'orange' }} />
  </Accordion>,
]

export const sidebar = () => {
  const props: SidebarProps = {
    isOpen: boolean('isOpen', false),
    right: boolean('right', false),
  }

  return <Sidebar {...props}>{children}</Sidebar>
}

export const withoutChildren = () => {
  const props: SidebarProps = {
    isOpen: boolean('isOpen', false),
    right: boolean('right', false),
  }

  return <Sidebar {...props} />
}

export const mountedSidebar = () => {
  const props: SidebarProps = {
    isOpen: boolean('isOpen', false),
    right: boolean('right', false),
  }

  return <MountedSidebar {...props}>{children}</MountedSidebar>
}

export const transitionSidebar = () => {
  const props: SidebarProps = {
    isOpen: boolean('isOpen', false),
    right: boolean('right', false),
  }

  return <TransitionSidebar {...props}>{children}</TransitionSidebar>
}
