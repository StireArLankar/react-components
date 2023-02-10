import { ComponentMeta, ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { MorphArrow } from './Arrow'

import { Accordion } from '.'

export default {
  title: 'Spring/Accordion',
  component: Accordion,
  decorators: [
    withCenteredStyle({
      width: 600,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }),
    withCustomTheme,
  ],
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = ({ ...rest }) => (
  <>
    <Accordion {...rest}>
      <div style={{ height: 300, backgroundColor: 'grey' }} />
    </Accordion>
    <div style={{ height: 10, backgroundColor: 'red' }} />
  </>
)

export const _Accordion = Template.bind({})
_Accordion.args = { title: 'title', hideArrow: false }
_Accordion.parameters = { controls: { include: ['title', 'hideArrow'] } }

export const _AccordionWithMorph = Template.bind({})
_AccordionWithMorph.args = { title: 'title', arrowComponent: MorphArrow }
_AccordionWithMorph.parameters = { controls: { include: ['title'] } }
