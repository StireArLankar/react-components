import * as Toast from '@radix-ui/react-toast'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useSnapshot } from 'valtio'

import classes from './_classes.css'
import { removeToast, state } from './toasts'

const variants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 'var(--radix-toast-swipe-move-x, var(--radix-toast-swipe-end-x))',
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: '100%',
    transition: { duration: 0.1 },
  },
}

const Toasts = () => {
  const { notifications } = useSnapshot(state)

  // const [, setRefresh] = useState(0)

  return (
    <Toast.Provider>
      {/* <AnimatePresence onExitComplete={() => setRefresh((p) => p + 1)}> */}
      <AnimatePresence>
        {notifications.map((item) => (
          <Toast.Root
            key={item.id}
            open
            asChild
            onOpenChange={(open) => {
              if (open === false) {
                removeToast(item.id)
              }
            }}
          >
            <motion.li layout='position' key={item.id}>
              <motion.div
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                className={classes.toast({ state: item.type })}
              >
                <Toast.Description>{item.message}</Toast.Description>
              </motion.div>
            </motion.li>
          </Toast.Root>
        ))}
      </AnimatePresence>

      <Toast.Viewport className={classes.viewport} />
    </Toast.Provider>
  )
}

export default Toasts
