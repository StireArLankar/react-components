import React, { ReactNode, useRef } from 'react'
import { useLayer } from 'react-laag'
import { RemoveScroll } from 'react-remove-scroll'

import { animated, useSpring } from '@react-spring/web'
import { useMultipleSelection, useSelect } from 'downshift'

import Checkbox from '../Checkbox'

import { ReactComponent as Arrow } from './arrow.svg'
import classes from './classes'

export interface ComboboxProps {
  values: string[]
  items: { value: string; label: ReactNode }[]
  onChange: (val: string[]) => void
  variant?: 'primary' | 'secondary'
  fit?: boolean
  unstyled?: boolean
  disabled?: boolean
  fixedContainer?: boolean
  layerWidth?: number
}

type ArrayElement<T extends any[]> = T extends readonly (infer R)[] ? R : never

const itemToString = (item: { value: string; label: ReactNode } | null) =>
  item ? item.value : ''

/**
 * @example
 * 0 -> -10 --- 100 -> 110
 */
const t = (val: number) => val * 1.2 - 10
/**
 * @example
 * 0 -> 110 --- 100 -> -10
 */
const t1 = (val: number) => t(100 - val)

const clipFromTop = (val: number) =>
  `polygon(-10% -10%, 110% -10%, 110% ${t(val)}%, -10% ${t(val)}%)`

const clipFromBottom = (val: number) =>
  `polygon(-10% ${t1(val)}%, 110% ${t1(val)}%, 110% 110%, -10% 110%)`

export const Combobox = (props: ComboboxProps) => {
  const { items, onChange, values, fixedContainer } = props

  const {
    addSelectedItem,
    selectedItems,
    removeSelectedItem,
    getDropdownProps,
  } = useMultipleSelection({
    selectedItems: items.filter((item) => values.includes(item.value)),
    onSelectedItemsChange: (ch) => {
      const vals = ch.selectedItems?.map((item) => item.value) || []
      onChange(vals)
    },
  })

  const isSelected = (item: ArrayElement<typeof items>) =>
    selectedItems.includes(item)

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useSelect({
    items: items,
    circularNavigation: true,
    itemToString: itemToString,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      const { selectedItem } = changes
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          if (selectedItem) {
            if (values.includes(selectedItem?.value ?? '')) {
              removeSelectedItem(selectedItem)
            } else {
              addSelectedItem(selectedItem)
            }
          }
      }

      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...changes,
            highlightedIndex: state.highlightedIndex,
            isOpen: true, // keep the menu open after selection.
          }
      }

      return changes
    },
  })

  const ref = useRef<HTMLDivElement>(null)

  const { renderLayer, triggerProps, layerProps, triggerBounds, layerSide } =
    useLayer({
      container: fixedContainer ? undefined : ref.current ?? undefined,
      isOpen: true,
      overflowContainer: true,
      placement: 'bottom-center',
      auto: true,
      triggerOffset: 9,
      possiblePlacements: ['bottom-center', 'top-center'],
      snap: true,
    })

  const refWidth = useRef(triggerBounds?.width)

  if (triggerBounds?.width) {
    refWidth.current = triggerBounds?.width
  }

  const anim = useSpring<{ c: number }>({ c: isOpen ? 100 : 0 })

  const renderLabel = () => {
    switch (true) {
      case selectedItems.length === 0:
        return 'NONE'
      case selectedItems.length === 1:
        return selectedItems[0].label
      default:
        return 'MULTIPLE'
    }
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type='button'
        {...getToggleButtonProps({
          ...triggerProps,
          disabled: props.disabled,
        })}
        className={classes.label({
          fit: props.fit,
          secondary: props.variant === 'secondary',
        })}
        disabled={props.disabled}
      >
        <span {...getDropdownProps()}>{renderLabel()}</span>
        <Arrow
          width='16'
          height='16'
          style={{
            transform: `rotate(${isOpen ? 0 : 180}deg)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </button>
      {renderLayer(
        <animated.div
          ref={layerProps.ref}
          style={{
            ...layerProps.style,
            width: props.layerWidth ?? refWidth.current,
            clipPath: anim.c.interpolate(
              layerSide === 'top' ? clipFromBottom : clipFromTop
            ),
            pointerEvents: anim.c.interpolate((val) =>
              val > 50 ? 'auto' : 'none'
            ),
            opacity: anim.c.interpolate((val) => val / 100),
            backgroundColor: 'white',
            borderRadius: 12,
            overflow: 'hidden',
            zIndex: 100,
            outline: 'none',
            boxShadow: '0px 3px 7px rgba(37, 98, 132, 0.4)',

            transformOrigin:
              layerSide === 'top' ? 'center bottom' : 'center top',
          }}
        >
          <RemoveScroll
            style={{
              maxHeight: Math.min(window.innerHeight / 3, 300),
              overflow: 'auto',
              willChange: 'opacity',
              outline: 'none',
            }}
            enabled={false}
            {...getMenuProps()}
          >
            <ul className={classes.list()}>
              {items.map((item, index) => (
                <li
                  key={item.value}
                  className={classes.item({
                    active: highlightedIndex === index,
                  })}
                  {...getItemProps({
                    item,
                    index,
                  })}
                >
                  <Checkbox
                    id={item.value}
                    value={isSelected(item)}
                    color='green'
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </RemoveScroll>
        </animated.div>
      )}
    </div>
  )
}
