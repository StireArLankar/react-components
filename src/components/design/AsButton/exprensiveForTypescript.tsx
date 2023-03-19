import {
  Attributes,
  createElement,
  CSSProperties,
  ComponentType,
  ComponentPropsWithRef,
} from 'react'

import clsx from 'clsx'

import classes from '../Liquid/_classes.css'

type BaseButtonComponent = keyof JSX.IntrinsicElements | ComponentType<any>

type BaseProps<C extends BaseButtonComponent = 'button'> = {
  component?: C
  className?: string
  style?: CSSProperties
} & Attributes

type BaseButtonProps<C extends BaseButtonComponent = 'button'> =
  C extends keyof JSX.IntrinsicElements
    ? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
    : C extends ComponentType<infer P>
    ? P extends ComponentPropsWithRef<any>
      ? Omit<P, keyof BaseProps<C>> & BaseProps<C>
      : never
    : never

function BaseButton<C extends BaseButtonComponent = 'button'>({
  component = 'button',
  children,
  ...props
}: BaseButtonProps<C>) {
  return createElement(component, props, children)
}

export type ButtonProps<C extends BaseButtonComponent = 'button'> =
  BaseButtonProps<C> & {
    loading?: boolean
    disabled?: boolean
  }

export default function Button<C extends BaseButtonComponent = 'button'>(
  _props: ButtonProps<C>
) {
  const { className, loading, disabled, children, ...props } = _props

  return (
    <BaseButton<C>
      className={clsx(classes.button, className)}
      {...(props as BaseButtonProps<C>)}
    >
      <span className={classes.text}>{children}</span>
      <div className={classes.liquid} />
    </BaseButton>
  )
}
