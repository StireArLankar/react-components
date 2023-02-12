import { PropsWithChildren } from 'react'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import classes from './_classes.css'

type Props = {
  style?: React.CSSProperties
}

const ScrollAreaDemo = ({ children, style }: PropsWithChildren<Props>) => (
  <ScrollAreaPrimitive.Root className={classes.root} style={style}>
    <ScrollAreaPrimitive.Viewport className={classes.viewport}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      className={classes.scrollbar}
      orientation='vertical'
    >
      <ScrollAreaPrimitive.Thumb className={classes.thumb} />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Scrollbar
      className={classes.scrollbar}
      orientation='horizontal'
    >
      <ScrollAreaPrimitive.Thumb className={classes.thumb} />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner className={classes.corner} />
  </ScrollAreaPrimitive.Root>
)

export default ScrollAreaDemo
