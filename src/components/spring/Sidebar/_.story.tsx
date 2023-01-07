import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Accordion } from '../Accordion'

import { Sidebar as MountedSidebar } from './MountedSidebar'
import { Sidebar as TransitionSidebar } from './TransitionSidebar'

import { Sidebar } from '.'

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

const Template: ComponentStory<typeof Sidebar> = (props) => (
  <Sidebar {...props}>{children}</Sidebar>
)
export const sidebar = Template.bind({})
sidebar.args = { isOpen: false, right: false }
sidebar.parameters = { controls: { include: ['isOpen', 'right'] } }

const Template1: ComponentStory<typeof Sidebar> = (props) => (
  <Sidebar {...props} />
)
export const withoutChildren = Template1.bind({})
withoutChildren.args = { isOpen: false, right: false }
withoutChildren.parameters = { controls: { include: ['isOpen', 'right'] } }

const Template2: ComponentStory<typeof MountedSidebar> = (props) => (
  <MountedSidebar {...props}>{children}</MountedSidebar>
)
export const mountedSidebar = Template2.bind({})
mountedSidebar.args = { isOpen: false, right: false }
mountedSidebar.parameters = { controls: { include: ['isOpen', 'right'] } }

const Template3: ComponentStory<typeof TransitionSidebar> = (props) => (
  <TransitionSidebar {...props}>{children}</TransitionSidebar>
)
export const transitionSidebar = Template3.bind({})
transitionSidebar.args = { isOpen: false, right: false }
transitionSidebar.parameters = { controls: { include: ['isOpen', 'right'] } }
