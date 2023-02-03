import { ReactNode, useEffect, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  Variants,
} from 'framer-motion'

import classes from './_classes.css'

type Props = {
  items: { id: string; text: string }[]
  onSelect: (id: string) => void
  caption: string
}

const contentVariants: Variants = {
  open: {
    opacity: 1,
    pointerEvents: 'none',
    transitionEnd: { pointerEvents: 'all' },
    transition: { ease: 'easeOut', duration: 0.2 },
  },
  closed: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { ease: 'easeIn', duration: 0.2 },
  },
}

export default function App(props: Props) {
  const { items, onSelect, caption } = props

  const [open, setOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const controls = useAnimationControls()

  const closeMenu = async () => {
    await controls.start('closed')
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      controls.start('open')
    }

    setIsClosing(false)
  }, [controls, open])

  const renderItems = () =>
    items.map((item) => (
      <Item
        key={item.id}
        closeMenu={closeMenu}
        onPreClose={() => setIsClosing(true)}
        onSelect={() => onSelect(item.id)}
      >
        {item.text}
      </Item>
    ))

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger className={classes.trigger}>
            💣
          </DropdownMenu.Trigger>

          <AnimatePresence>
            {open && (
              <DropdownMenu.Portal forceMount>
                <DropdownMenu.Content
                  align='start'
                  asChild
                  collisionPadding={10}
                >
                  <motion.div
                    initial='closed'
                    animate={controls}
                    exit='closed'
                    variants={contentVariants}
                    className={classes.content}
                  >
                    <div
                      className={classes.overflow}
                      style={isClosing ? { pointerEvents: 'none' } : undefined}
                    >
                      {renderItems()}
                    </div>
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            )}
          </AnimatePresence>
        </DropdownMenu.Root>
      </header>

      <p className={classes.caption}>{caption}</p>
      <button onClick={() => alert('under')}>button under</button>
    </div>
  )
}

type ItemProps = {
  children: ReactNode
  onSelect: () => void
  closeMenu: () => Promise<void>
  onPreClose: () => void
}

const Item = (props: ItemProps) => {
  const { children } = props

  const controls = useAnimationControls()

  type A = React.ComponentProps<typeof DropdownMenu.Item>['onSelect']
  const onSelect: A = async (e) => {
    e.preventDefault()

    props.onPreClose()

    await controls.start({
      backgroundColor: `#fff`,
      color: `#000`,
      transition: { duration: 0.1, ease: 'easeIn' },
    })

    await controls.start({
      backgroundColor: `rgb(56 189 248)`,
      color: `#fff`,
      transition: { duration: 0.1, ease: 'easeOut' },
    })

    await wait(0.075)
    await props.closeMenu()
    props.onSelect()
  }

  return (
    <DropdownMenu.Item asChild onSelect={onSelect}>
      <motion.div animate={controls} className={classes.item}>
        <span>{children}</span>
      </motion.div>
    </DropdownMenu.Item>
  )
}

const wait = (s: number) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000))
