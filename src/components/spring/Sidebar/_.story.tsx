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
export const _Sidebar = Template.bind({})
_Sidebar.args = { isOpen: false, right: false }
_Sidebar.parameters = { controls: { include: ['isOpen', 'right'] } }

const Template1: ComponentStory<typeof Sidebar> = (props) => (
  <Sidebar {...props} />
)
export const _WithoutChildren = Template1.bind({})
_WithoutChildren.args = { isOpen: false, right: false }
_WithoutChildren.parameters = { controls: { include: ['isOpen', 'right'] } }

const Template2: ComponentStory<typeof MountedSidebar> = (props) => (
  <MountedSidebar {...props}>{children}</MountedSidebar>
)
export const _MountedSidebar = Template2.bind({})
_MountedSidebar.args = { isOpen: false, right: false }
_MountedSidebar.parameters = { controls: { include: ['isOpen', 'right'] } }

const Template3: ComponentStory<typeof TransitionSidebar> = (props) => (
  <TransitionSidebar {...props}>{children}</TransitionSidebar>
)
export const _TransitionSidebar = Template3.bind({})
_TransitionSidebar.args = { isOpen: false, right: false }
_TransitionSidebar.parameters = { controls: { include: ['isOpen', 'right'] } }
