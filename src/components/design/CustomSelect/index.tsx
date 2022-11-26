import { useMemo, useRef } from 'react'
import { useLayer } from 'react-laag'

import { useSelect } from 'downshift'
import { motion, AnimatePresence, Variants } from 'framer-motion'

import classes from './_classes.css'

export interface SelectProps {
  value: string
  items: { value: string; label: string }[]
  onChange: (val: string) => void
}

const variants: Variants = {
  initial: {
    opacity: 0,
    height: 0,
    overflowY: 'hidden',
  },
  animate: {
    opacity: 1,
    height: 'auto',
    transitionEnd: {
      overflowY: 'auto',
    },
  },
  exit: { opacity: 0, height: 0, overflowY: 'hidden' },
}

const variantsList: Variants = {
  initial: {},
  animate: {},
  exit: {},
}

const itemToString = (item: { value: string; label: string } | null) =>
  item ? item.value : ''

const getLabel = (item: { value: string; label: string } | null) =>
  item ? item.label : ''

export const Select = (props: SelectProps) => {
  const { items, onChange, value } = props
  // This is the place to store the fruits that match the input value

  const selected = useMemo(() => {
    return items.find((item) => item.value === value)
  }, [items, value])

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useSelect({
    // isOpen: true,
    items: items,
    circularNavigation: true,
    itemToString: itemToString,
    selectedItem: selected,
    onSelectedItemChange: (val) =>
      val.selectedItem?.value && onChange(val.selectedItem?.value),
  })

  const showMenu = isOpen

  const ref = useRef<HTMLDivElement>(null)

  const { renderLayer, triggerProps, layerProps, layerSide, triggerBounds } =
    useLayer({
      // container: ref.current ?? undefined,
      isOpen: showMenu,
      overflowContainer: true,
      placement: 'bottom-center',
      auto: true,
      triggerOffset: 9,
    })

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type='button'
        {...getToggleButtonProps(triggerProps)}
        className={classes.label}
      >
        <span>{getLabel(selectedItem) || '--'}</span>
        <svg width='16' height='16' viewBox='0 0 16 16'>
          <path
            d='M3.52864 6.02861C3.78899 5.76826 4.2111 5.76826 4.47145 6.02861L8.00004 9.5572L11.5286 6.02861C11.789 5.76826 12.2111 5.76826 12.4714 6.02861C12.7318 6.28896 12.7318 6.71107 12.4714 6.97141L8.47145 10.9714C8.2111 11.2318 7.78899 11.2318 7.52864 10.9714L3.52864 6.97141C3.26829 6.71107 3.26829 6.28896 3.52864 6.02861Z'
            fill='currentColor'
          />
        </svg>
      </button>
      <div {...getMenuProps()}>
        {renderLayer(
          <AnimatePresence>
            {showMenu && (
              <motion.div
                ref={layerProps.ref}
                className={classes.wrapper}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                style={{
                  ...layerProps.style,
                  width: triggerBounds?.width,
                  originY: layerSide === 'top' ? '100%' : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.ul
                  variants={variantsList}
                  transition={{ duration: 0.2 }}
                  className={classes.list}
                >
                  {items.map((item, index) => (
                    <li
                      key={`${item}${index}`}
                      className={classes.item({
                        active: highlightedIndex === index,
                      })}
                      {...getItemProps({ item, index })}
                    >
                      {item.label}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

export default Select
