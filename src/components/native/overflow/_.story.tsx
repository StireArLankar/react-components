import { ComponentStory } from '@storybook/react'

import { Overflow, OverflowProps } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { themeColors } from '~/theme/theme.styles'

export default {
  title: 'Native/Overflow',
  decorators: [
    withCenteredStyle({ width: 'auto', backgroundColor: themeColors.text }),
    withCustomTheme,
  ],
}

type Props = OverflowProps & {
  width: number
  fontSize: number
}
const Asd = ({ text, ...style }: Props) => (
  <div style={style}>
    <Overflow text={text} />
  </div>
)
const Template: ComponentStory<typeof Asd> = (props) => <Asd {...props} />

export const overflow = Template.bind({})
overflow.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ea alias beatae in eaque accusamus dolor numquam! Maxime consequuntur placeat laboriosam nisi, deleniti ea earum vitae pariatur dolores voluptatum. Ipsam obcaecati quo delectus perferendis excepturi quisquam harum quam atque nesciunt, dicta, vero libero nobis optio sit! Pariatur aut laboriosam optio maxime ea asperiores nemo consectetur totam minima nihil omnis iure tempora dolor perferendis enim, quis porro atque, ipsa corporis molestiae ratione, tempore ut. Ipsum nam aliquid natus suscipit saepe sed quidem veritatis architecto tenetur dolore, unde molestias voluptatum consectetur ex repellendus nostrum cum reprehenderit? Vitae quae qui veritatis fuga nemo.',
  width: 200,
  fontSize: 16,
}
