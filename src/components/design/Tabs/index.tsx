import React, { useState } from 'react'

import { List, Root, Tab } from '@radix-ui/react-tabs'
import { AnimateSharedLayout, motion, Variants } from 'framer-motion'

import useStyles from './styles'

const variantItem: Variants = {
  open: {},
  close: {},
}

const variantText: Variants = {
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0.6,
  },
}

const variant: Variants = {
  open: {
    opacity: 1,
    visibility: 'visible',
  },
  close: {
    opacity: 0,
    transitionEnd: {
      visibility: 'hidden',
    },
  },
}

export default () => {
  const [selected, setSelected] = useState('0')

  const classes = useStyles()

  return (
    <div className={classes.card}>
      <Root value={selected} onValueChange={setSelected}>
        <List className={classes.list} as='ol'>
          <AnimateSharedLayout>
            <Tab
              value='0'
              as={motion.li}
              className={classes.title}
              variants={variantItem}
              animate={selected === '0' ? 'open' : 'close'}
            >
              {'0' === selected && (
                <motion.div layoutId='_' className={classes.underline} />
              )}
              <motion.span animate variants={variantText}>
                1
              </motion.span>
            </Tab>
            <Tab
              value='1'
              as={motion.li}
              className={classes.title}
              variants={variantItem}
              animate={selected === '1' ? 'open' : 'close'}
            >
              {'1' === selected && (
                <motion.div layoutId='_' className={classes.underline} />
              )}
              <motion.span animate variants={variantText}>
                2
              </motion.span>
            </Tab>
          </AnimateSharedLayout>
        </List>
      </Root>

      <div
        style={{
          overflow: 'hidden',
          margin: '0 -16px 0',
        }}
      >
        <motion.div
          style={{
            width: '200%',
            gridTemplateColumns: `1fr 1fr`,
            transform: `translateX(-${(+selected * 100) / 2}%)`,
            transition: 'transform 0.3s ease-in-out',
          }}
          className={classes.contentList}
        >
          <motion.div
            variants={variant}
            animate={+selected === 0 ? 'open' : 'close'}
            className={classes.item}
          >
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              consequuntur? Sed nulla, possimus sunt obcaecati, reprehenderit
              temporibus corporis repudiandae aliquid facilis dolore nostrum
              quod repellendus praesentium itaque vitae perspiciatis magni.
            </div>
          </motion.div>
          <motion.div
            variants={variant}
            animate={+selected === 1 ? 'open' : 'close'}
            className={classes.item}
          >
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              consequuntur? Sed nulla, possimus sunt obcaecati, reprehenderit
              temporibus corporis repudiandae aliquid facilis dolore nostrum
              quod repellendus praesentium itaque vitae perspiciatis magni.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              consequuntur? Sed nulla, possimus sunt obcaecati, reprehenderit
              temporibus corporis repudiandae aliquid facilis dolore nostrum
              quod repellendus praesentium itaque vitae perspiciatis magni.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
