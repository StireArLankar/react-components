import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

const req = require.context('../src/', true, /\.story\.(ts|tsx)$/)

addDecorator(StoryRouter())

addDecorator(withKnobs)

configure(req, module)
