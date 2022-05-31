import type { DecoratorFn } from '@storybook/react'

import * as classes from './story.css'

export const withTopLabel =
  (content: JSX.Element): DecoratorFn =>
  (fn) =>
    (
      <>
        <div className={classes.label}>{content}</div>
        {fn()}
      </>
    )
