import React from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import classes from './classes'
import InputHelper from './helper'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type Props = {
  id: string
  subtext?: string
  label?: React.ReactNode
  value: boolean
  error?: boolean
  helperText?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

type CheckboxProps = Props &
  Omit<InputProps, 'ref' | 'size' | 'type' | keyof Props>

const Component = (props: CheckboxProps) => {
  const {
    error,
    helperText,
    label,
    value: checked,
    color,

    ...rest
  } = props

  return (
    <div>
      <div className={classes.wrapper()}>
        <Checkbox.Root
          {...(rest as any)}
          checked={checked}
          className={classes.root()}
          style={{ color }}
          onCheckedChange={props.onChange}
        >
          <Checkbox.Indicator
            className={classes.indicator({ checked })}
            forceMount
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z' />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Root>

        <label
          htmlFor={props.id}
          onSelect={(e) => e.preventDefault()}
          className={classes.label()}
        >
          {label}
        </label>
      </div>

      <InputHelper helperText={helperText} />
    </div>
  )
}

export default Component
