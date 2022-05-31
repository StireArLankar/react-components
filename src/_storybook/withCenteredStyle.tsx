import type { DecoratorFn } from '@storybook/react'

import * as classes from './story.css'

export const withCenteredStyle =
  (style: React.CSSProperties = {}): DecoratorFn =>
  (storyfn) =>
    (
      <div className={classes.wrapper}>
        <div className={classes.content} style={style}>
          {storyfn()}
        </div>
      </div>
    )
