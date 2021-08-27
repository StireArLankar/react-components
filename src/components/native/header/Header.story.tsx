import React from 'react'
import { HashRouter } from 'react-router-dom'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { Header, HeaderProps } from '.'

export default {
  title: 'Native/Header With Sidebar',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20 }),
    withCustomTheme,
  ],
}

export const example = () => {
  const props: HeaderProps = {
    items: [
      {
        path: '/',
        component: () => <div />,
        title: 'Home',
        exact: true,
      },
      {
        path: '/pagination',
        component: () => <div />,
        title: 'Pagination',
      },
      {
        path: '/intersection',
        component: () => <div />,
        title: 'Intersection',
      },
      {
        path: '/slider-one',
        component: () => <div />,
        title: 'Slider One',
      },
      {
        path: '/form-fields',
        component: () => <div />,
        title: 'Form Fields',
      },
      {
        path: '/color',
        component: () => <div />,
        title: 'Color',
      },
      {
        path: '/select',
        component: () => <div />,
        title: 'Select',
      },
      {
        path: '/dnd-sorting',
        component: () => <div />,
        title: 'DndSorting',
      },
      {
        path: '/lense',
        component: () => <div />,
        title: 'Lense',
      },
      {
        path: '/autocomplete',
        component: () => <div />,
        title: 'Autocomplete',
      },
      {
        path: '/slider-two',
        component: () => <div />,
        title: 'Slider Two',
      },
      {
        path: '/circle-bar',
        component: () => <div />,
        title: 'Circle bar',
      },
      {
        path: '/spring/accordion',
        component: () => <div />,
        title: 'Accordion',
      },
      {
        path: '/spring/toggle',
        component: () => <div />,
        title: 'Toggle',
      },
    ],
  }

  return (
    <HashRouter>
      <Header {...props} />
    </HashRouter>
  )
}
