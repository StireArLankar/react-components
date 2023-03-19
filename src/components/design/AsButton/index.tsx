import { forwardRef, useRef, cloneElement, Children } from 'react'

import clsx from 'clsx'

import classes from '../Liquid/_classes.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type Props =
  | ({
      asChild?: false
      children: React.ReactNode
    } & ButtonProps)
  | {
      asChild: true
      children: React.ReactElement
      className?: string
    }

// type Props = PropsSelfProps & (ChildrenForward | ChildrenNode)

const mergeRefs = (...refs: any) => {
  return (node: any) => {
    for (const ref of refs) {
      if (ref) {
        ref.current = node
      }
    }
  }
}

const BaseButton = forwardRef<HTMLElement, Props>((props, parentRef) => {
  const ref = useRef<HTMLElement>(null)

  const { asChild, children, className, ...rest } = props

  // const containerRef = mergeRefs(ref, parentRef)

  if (!asChild) {
    return (
      <button
        {...rest}
        className={clsx(classes.button, className)}
        ref={mergeRefs(ref, parentRef)}
      >
        <span className={classes.text}>{children}</span>
        <div className={classes.liquid} />
      </button>
    )
  }

  return cloneElement(
    Children.only(children),
    {
      ...rest,
      ref: mergeRefs(ref, parentRef),
      className: clsx(classes.button, className),
    },
    <>
      <span className={classes.text}>
        {Children.only(children).props.children}
      </span>
      <div className={classes.liquid} />
    </>
  )
})

export default BaseButton
