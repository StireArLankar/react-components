import { ReactNode, useMemo, useRef } from 'react'
import { useLayer } from 'react-laag'
import { RemoveScroll } from 'react-remove-scroll'

import { animated, useSpring } from '@react-spring/web'
import { useSelect } from 'downshift'

import classes from './_classes.css'
import { ReactComponent as Arrow } from './arrow.svg'

export interface SelectProps {
  id?: string
  value: string
  items: { value: string; label: ReactNode }[]
  onChange: (val: string) => void
  variant?: 'primary' | 'secondary'
  fit?: boolean
  disabled?: boolean
  fixedContainer?: boolean
}

const itemToString = (item: { value: string; label: ReactNode } | null) =>
  item ? item.value : ''

const mobileCheck = () => {
  let check = false
  ;(function (a) {
    if (
      /* eslint-disable-next-line */
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /* eslint-disable-next-line */
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    ) {
      check = true
    }
  })(navigator.userAgent || navigator.vendor || (window as any).opera)
  return check
}

export default (props: SelectProps) => {
  const isMobile = mobileCheck()

  return isMobile ? <Mobile {...props} /> : <Temp {...props} />
}

const Mobile = (props: SelectProps) => {
  const label = useMemo((): ReactNode => {
    const temp = props.items.find(({ value }) => value === props.value)

    if (temp) {
      return temp.label
    }

    return <div />
  }, [props.items, props.value])

  const ref = useRef<HTMLSelectElement>(null)

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <select
        id={props.id}
        className={classes.label({ fit: props.fit, variant: props.variant })}
        value={props.value}
        ref={ref}
        disabled={props.disabled}
        style={{
          opacity: 0,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.items.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <button
        className={classes.label({ fit: props.fit, variant: props.variant })}
        type='button'
        onClick={() => ref.current?.click()}
        style={{
          pointerEvents: 'none',
        }}
      >
        <span>{label}</span>
        <Arrow width='16' height='16' style={{ transform: `rotate(180deg)` }} />
      </button>
    </div>
  )
}

const t = (val: number) => val * 1.2 - 10

const clipFromTop = (val: number) =>
  `polygon(-10% -10%, 110% -10%, 110% ${t(val)}%, -10% ${t(val)}%)`

const clipFromBottom = (val: number) =>
  `polygon(-10% ${t(100 - val)}%, 110% ${t(100 - val)}%, 110% 110%, -10% 110%)`

export const Temp = (props: SelectProps) => {
  const { items, onChange, value, fixedContainer } = props

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
    items: items,
    circularNavigation: true,
    itemToString: itemToString,
    selectedItem: selected,
    onSelectedItemChange: (val) =>
      val.selectedItem?.value && onChange(val.selectedItem?.value),
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

  const anim = useSpring({ c: isOpen ? 100 : 0 })

  const { ref: menuRef, ...menuProps } = getMenuProps()

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type='button'
        {...getToggleButtonProps({
          ...triggerProps,
          disabled: props.disabled,
        })}
        className={classes.label({ fit: props.fit, variant: props.variant })}
        disabled={props.disabled}
      >
        <span>{selectedItem?.label || '--'}</span>
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
            width: refWidth.current,
            clipPath: anim.c.to(
              layerSide === 'top' ? clipFromBottom : clipFromTop
            ),
            pointerEvents: anim.c.to((val) => (val > 50 ? 'auto' : 'none')),
            opacity: anim.c.to((val) => val / 100),
            backgroundColor: 'white',
            borderRadius: 12,
            overflow: 'hidden',
            zIndex: 100,
            outline: 'none',
            boxShadow: '0px 7px 7px rgba(37, 98, 132, 0.4)',

            transformOrigin:
              layerSide === 'top' ? 'center bottom' : 'center top',
          }}
        >
          <RemoveScroll
            ref={menuRef}
            style={{
              maxHeight: Math.min(window.innerHeight / 3, 300),
              overflow: 'auto',
              willChange: 'opacity',
              outline: 'none',
            }}
            enabled={false}
            {...menuProps}
          >
            <ul className={classes.list}>
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
