import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink, vars } from '~/theme/theme.css'

import V2 from './v2'

import Component from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.react-spring.io'>
      docs
    </a>
  </>
)

export default {
  title: 'Spring/Tree',
  decorators: [withCustomTheme, withTopLabel(label)],
}

export const Tree = () => (
  <div
    style={{
      background: vars.color.dark,
      position: 'fixed',
      top: 0,
      left: 0,
      minWidth: '100vw',
      minHeight: '100vh',
      padding: 30,
      bottom: 0,
      overflow: 'auto',
    }}
  >
    <Component />
  </div>
)

export const Version2 = () => (
  <div
    style={{
      background: vars.color.dark,
      position: 'fixed',
      top: 0,
      left: 0,
      minWidth: '100vw',
      minHeight: '100vh',
      padding: 30,
      bottom: 0,
      overflow: 'auto',
    }}
  >
    <V2 />
  </div>
)
