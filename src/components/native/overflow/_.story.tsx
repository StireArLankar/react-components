import { text, number } from '@storybook/addon-knobs'

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

export const overflow = () => {
  const props: OverflowProps = {
    text: text(
      'title',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ea alias beatae in eaque accusamus dolor numquam! Maxime consequuntur placeat laboriosam nisi, deleniti ea earum vitae pariatur dolores voluptatum. Ipsam obcaecati quo delectus perferendis excepturi quisquam harum quam atque nesciunt, dicta, vero libero nobis optio sit! Pariatur aut laboriosam optio maxime ea asperiores nemo consectetur totam minima nihil omnis iure tempora dolor perferendis enim, quis porro atque, ipsa corporis molestiae ratione, tempore ut. Ipsum nam aliquid natus suscipit saepe sed quidem veritatis architecto tenetur dolore, unde molestias voluptatum consectetur ex repellendus nostrum cum reprehenderit? Vitae quae qui veritatis fuga nemo.'
    ),
    // isHovered: boolean('isHovered', false),
  }

  const width = number('width', 200)
  const fontSize = number('font-size', 16)

  return (
    <div style={{ width: Number(width), fontSize }}>
      <Overflow {...props} />
    </div>
  )
}
