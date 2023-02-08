import type { Decorator } from '@storybook/react'

import * as classes from './story.css'

export const withTopLabel =
  (content: JSX.Element): Decorator<any> =>
  (fn) =>
    (
      <>
        <div className={classes.label}>{content}</div>
        {fn()}
      </>
    )
