import React, { memo, useState } from 'react'
import { PropsWithChildren } from 'react'
import NumberFormat from 'react-number-format'

import { AnimatePresence, motion } from 'framer-motion'

import classes from './classes'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type Props = PropsWithChildren<{
  id: string
  name?: string
  label?: string
  onUpdate?: () => void
  value?: string
  onChange?: (e: string) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  style?: React.CSSProperties

  error?: boolean
  helperText?: string
  placeholder?: string
  disabled?: boolean
  multiline?: boolean
  readOnly?: boolean
  autoComplete?: string
  type?: 'text' | 'tel' | 'password'
}> &
  Omit<InputProps, 'ref' | 'onChange' | 'defaultValue' | 'type'>

const Component = memo((props: Props) => {
  const {
    label,
    error,
    helperText,
    onChange,
    value,
    id,
    placeholder,
    disabled,
    multiline,
    children,
    readOnly,
    autoComplete,
    onUpdate,
    ...rest
  } = props

  const [isFocused, setIsFocused] = useState(false)

  const onBlur = (e: any) => {
    props?.onBlur?.(e)
    setIsFocused(false)
  }

  const onFocus = (e: any) => {
    props?.onFocus?.(e)
    setIsFocused(true)
  }

  const renderChildren = () =>
    children ? <div className={classes.children()}>{children}</div> : null

  const onValueChange = (e: any) => {
    if (disabled) {
      return
    }

    return onChange?.(e.target.value)
  }

  const renderInput = () => (
    //@ts-ignore
    <NumberFormat<any>
      {...rest}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      id={id}
      onChange={onValueChange}
      className={classes.input()}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete={autoComplete}
      format={(val) => formatWithPattern(val, '+7 (###) ###-##-##', '_')}
      removeFormatting={(val) => removeFormatting(val, '+7 ##########')}
    />
  )

  return (
    <div className={classes.container()}>
      <label className={classes.label()} htmlFor={id}>
        {label}
      </label>
      <div
        className={classes.inputWrapper({
          error,
          disabled,
          focused: isFocused,
        })}
      >
        {renderInput()}
        {renderChildren()}
        <AnimatePresence>
          {helperText && (
            <motion.div
              className={classes.helper()}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key='helper'
            >
              <span>{helperText}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
})

const removeFormatting = (val: string, format: string) => {
  const formatArray = format.split('#').filter((str) => str !== '')
  let start = 0
  let numStr = ''

  for (let i = 0, ln = formatArray.length; i <= ln; i++) {
    const part = formatArray[i] || ''

    const index = i === ln ? val.length : val.indexOf(part, start)

    if (index === -1) {
      numStr = val
      break
    } else {
      numStr += val.substring(start, index)
      start = index + part.length
    }
  }

  return (numStr.match(/\d/g) || []).join('')
}

const formatWithPattern = (
  numStr: string,
  format: string,
  mask: string = ' '
) => {
  let hashCount = 0
  const formattedNumberAry = format.split('')

  if (numStr.match(/[78][0-9]{10}/)) {
    numStr = numStr.slice(1)
  }
  for (let i = 0, ln = format.length; i < ln; i++) {
    if (format[i] === '#') {
      formattedNumberAry[i] =
        numStr[hashCount] || getMaskAtIndex(hashCount, mask)
      hashCount += 1
    }
  }

  return formattedNumberAry.join('')
}

const getMaskAtIndex = (index: number, mask: string) => {
  if (typeof mask === 'string') {
    return mask
  }

  return mask[index] || ' '
}

export default Component
