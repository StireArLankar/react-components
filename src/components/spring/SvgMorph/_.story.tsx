import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SvgMorph as Gradiented } from './Gradiented'

import { SvgMorph } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink, vars } from '~/theme/theme.css'

const label = (
  <>
    <span>Morph svgs here </span>
    <a className={storyLink} href='https://shapeshifter.design'>
      https://shapeshifter.design
    </a>
  </>
)

export default {
  title: 'Spring/SvgMorph',
  decorators: [
    withCenteredStyle({ color: vars.color.text }),
    withCustomTheme,
    withTopLabel(label),
  ],
  args: { toggle: false },
  parameters: { controls: { include: ['toggle'] } },
} as ComponentMeta<typeof SvgMorph>

type t = ComponentStory<typeof SvgMorph>
const Template: t = (props) => <SvgMorph {...props} />

export const basic = Template.bind({})
basic.args = {
  firstPath: 'M18 10L10 2L2 10',
  secondPath: 'M18 2L10 10L2 2',
  viewBox: '0 0 20 12',
  strokeLinejoin: 'round',
  strokeWidth: '2',
  stroke: 'white',
  fill: 'transparent',
  strokeLinecap: 'round',
  width: '200',
}

export const basic2 = Template.bind({})
basic2.args = {
  firstPath: 'M18 14L10 6L2 14',
  secondPath: 'M18 6L10 14L2 6',
  viewBox: '0 0 20 20',
  strokeLinejoin: 'round',
  strokeWidth: '2',
  stroke: 'white',
  fill: 'transparent',
  strokeLinecap: 'round',
  width: '200',
}

export const first = Template.bind({})
first.args = {
  firstPath:
    'M 14.71 15.88 C 13.417 14.587 12.123 13.293 10.83 12 C 12.123 10.707 13.417 9.413 14.71 8.12 C 15.1 7.73 15.1 7.1 14.71 6.71 C 14.586 6.586 14.432 6.497 14.263 6.452 C 14.094 6.406 13.916 6.406 13.747 6.452 C 13.578 6.497 13.424 6.586 13.3 6.71 C 11.77 8.24 10.24 9.77 8.71 11.3 C 8.515 11.495 8.418 11.75 8.418 12.005 C 8.418 12.26 8.515 12.515 8.71 12.71 L 13.3 17.3 C 13.69 17.69 14.32 17.69 14.71 17.3 C 15.09 16.91 15.1 16.27 14.71 15.88 L 14.71 15.88',
  secondPath:
    'M 15.29 12.71 C 15.485 12.515 15.582 12.26 15.582 12.005 C 15.582 11.75 15.485 11.495 15.29 11.3 C 13.76 9.77 12.23 8.24 10.7 6.71 C 10.31 6.32 9.68 6.32 9.29 6.71 C 9.166 6.834 9.077 6.988 9.032 7.157 C 8.986 7.326 8.986 7.504 9.032 7.673 C 9.077 7.842 9.166 7.996 9.29 8.12 C 10.583 9.413 11.877 10.707 13.17 12 C 11.877 13.293 10.583 14.587 9.29 15.88 L 9.29 15.88 C 8.9 16.27 8.91 16.91 9.29 17.3 C 9.68 17.69 10.31 17.69 10.7 17.3 L 15.29 12.71',
  viewBox: '6 6 12 12',
  width: '200',
  height: '200',
  fill: 'white',
}

export const second = Template.bind({})
second.args = {
  firstPath:
    'M 21 3 C 22.522 9 22.522 14 21 21 M 18 6 C 18.772 9 18.772 15 18 18 M 15 9 C 15.2 11 15.2 13 15 15',
  secondPath:
    'M 18 6 C 18.772 10 18.772 14 18 18 M 15 9 C 15.201 11 15.201 13 15 15 M 12 12 C 12 11.931 12 11.863 12 11.794',
  viewBox: '10 5 14 10',
  width: '100',
  height: '200',
  stroke: 'white',
  strokeLinecap: 'round',
  strokeWidth: '2',
}

export const third = Template.bind({})
second.args = {
  firstPath:
    'M 12 17.27 C 9.94 18.513 7.88 19.757 5.82 21 C 6.367 18.657 6.913 16.313 7.46 13.97 C 6.55 13.182 5.64 12.393 4.73 11.605 C 3.82 10.817 2.91 10.028 2 9.24 C 4.397 9.037 6.793 8.833 9.19 8.63 C 10.127 6.42 11.063 4.21 12 2 C 12.937 4.21 13.873 6.42 14.81 8.63 C 16.008 8.732 17.207 8.833 18.405 8.935 C 19.603 9.037 20.802 9.138 22 9.24 C 21.393 9.766 20.787 10.291 20.18 10.817 C 19.573 11.342 18.967 11.868 18.36 12.393 C 17.753 12.919 17.147 13.444 16.54 13.97 C 17.087 16.313 17.633 18.657 18.18 21 C 17.837 20.793 17.493 20.586 17.15 20.378 C 16.807 20.171 16.463 19.964 16.12 19.757 C 15.777 19.549 15.433 19.342 15.09 19.135 C 14.747 18.928 14.403 18.721 14.06 18.513 L 13.03 17.892 L 12.824 17.767 L 12.618 17.643 L 12.412 17.519 L 12.206 17.394 L 12 17.27',
  secondPath:
    'M 10.55 20.03 C 9.692 19.252 8.882 18.518 8.129 17.817 C 7.375 17.116 6.678 16.449 6.045 15.805 C 5.411 15.161 4.842 14.54 4.344 13.931 C 2.85 12.105 2 10.39 2 8.5 C 2 5.42 4.42 3 7.5 3 C 8.37 3 9.223 3.203 9.994 3.565 C 10.765 3.928 11.455 4.45 12 5.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 C 22 9.445 21.788 10.346 21.388 11.24 C 20.989 12.133 20.403 13.019 19.656 13.932 C 18.909 14.846 18.002 15.788 16.959 16.794 C 16.829 16.92 16.696 17.047 16.562 17.174 C 16.427 17.302 16.291 17.431 16.152 17.561 C 16.013 17.691 15.872 17.822 15.73 17.954 C 15.587 18.087 15.443 18.22 15.296 18.355 C 14.71 18.895 14.094 19.455 13.45 20.04 L 12.725 20.695 L 12 21.35 L 12 21.35 L 11.517 20.91 L 11.033 20.47 L 10.55 20.03',
  viewBox: '0 0 24 24',
  width: '200',
  height: '200',
  fill: 'white',
}

export const gradiented = () => <Gradiented />
