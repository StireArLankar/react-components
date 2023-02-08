import type { Decorator } from '@storybook/react'

import * as classes from './story.css'

export const withCenteredStyle =
  (style: React.CSSProperties = {}): Decorator<any> =>
  (storyfn) =>
    (
      <div className={classes.wrapper}>
        <div className={classes.content} style={style}>
          {storyfn()}
        </div>
      </div>
    )
