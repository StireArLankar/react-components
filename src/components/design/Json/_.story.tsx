import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import { acai } from './_classes.css'
import { JSONPretty } from './Base'
import json from './json.json'

import Json from '.'

const label = (
  <>
    <span>Credits to </span>
    <a
      className={storyLink}
      href='https://github.com/chenckang/react-json-pretty'
    >
      project
    </a>
  </>
)

export default {
  title: 'Design/Json',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      display: 'grid',
      alignItems: 'stretch',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
      justifyContent: 'unset',
    }),
    withTopLabel(label),
  ],
}

export const Initial = () => <JSONPretty data={json} />
export const Rewritten = () => <Json json={json} />
export const AcaiTheme = () => <Json json={json} theme={acai} />
export const NestedJson = () => (
  <Json
    json={{
      hello1: 'world',
      hello2: 'world',
      hello3: 'world',
      sad: { world: [1, 2, 3], bool: true },
      hello: JSON.stringify({
        hello: 'world',
        hello1: 'world',
        hello2: 'world',
        hello3: 'world',
        sad: { world: [1, 2, 3], bool: true },
      }),
    }}
  />
)
