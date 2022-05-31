/* eslint-disable jsx-a11y/accessible-emoji */
import React, { memo, useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'

import { animated, useSpring } from '@react-spring/web'

import classes from '../classes'
import * as Icons from '../icons'

type Base = {
  meta?: boolean
  title: string
}

type Data = Base &
  (
    | {
        type: 'branch'
        nodes: Data[]
      }
    | {
        type: 'leaf'
        title: string
      }
  )

const data: Data = {
  type: 'branch',
  title: 'Data navigation tree',
  nodes: [
    {
      title: 'Database by themes',
      nodes: [
        {
          title: 'General and regional statistics',
          nodes: [
            {
              title:
                'European and national indicators for short-term analysis (euroind)	',
              type: 'branch',
              nodes: [
                {
                  title:
                    'Business and consumer surveys (source: DG ECFIN) (ei_bcs)',
                  type: 'branch',
                  nodes: [],
                  meta: true,
                },
                {
                  title: 'Balance of payments (ei_bp)',
                  type: 'branch',
                  nodes: [
                    {
                      title: 'Current account - quarterly data (ei_bpm6ca_q)',
                      type: 'leaf',
                      meta: true,
                    },
                    {
                      title: 'Financial account - quarterly data (ei_bpm6fa_q)',
                      type: 'leaf',
                      meta: true,
                    },
                    {
                      title: 'Current account - monthly data (ei_bpm6ca_m)',
                      type: 'leaf',
                      meta: true,
                    },
                    {
                      title: 'Financial account - monthly data (ei_bpm6fa_m)',
                      type: 'leaf',
                      meta: true,
                    },
                    {
                      title:
                        'International investment position - quarterly data (ei_bpm6iip_q)',
                      type: 'leaf',
                      meta: true,
                    },
                  ],
                  meta: true,
                },
                {
                  title: 'Consumer prices (ei_cp)',
                  type: 'branch',
                  nodes: [],
                  meta: true,
                },
                {
                  title: 'Housing price statistics (ei_hp)',
                  type: 'branch',
                  nodes: [],
                },
                {
                  title: 'International trade (ei_et)',
                  type: 'branch',
                  nodes: [],
                  meta: true,
                },
                {
                  title: 'Industry, trade and services (ei_is)',
                  type: 'branch',
                  nodes: [],
                  meta: true,
                },
                { title: 'Labour market (ei_lm)', type: 'branch', nodes: [] },
                {
                  title: 'Monetary and financial indicators (ei_mf)',
                  type: 'branch',
                  nodes: [],
                  meta: true,
                },
                {
                  title: 'National accounts (ei_qna)',
                  type: 'branch',
                  nodes: [],
                },
              ],
              meta: true,
            },
            {
              title: 'Regional statistics by NUTS classification (reg)	',
              type: 'branch',
              nodes: [],
            },
            {
              title: 'Regional statistics by typology (reg_typ)	',
              type: 'branch',
              nodes: [],
              meta: true,
            },
            {
              title: 'Degree of urbanisation (degurb)	',
              type: 'branch',
              nodes: [],
            },
            {
              title: 'City statistics (urb)	',
              type: 'branch',
              nodes: [],
              meta: true,
            },
            {
              title: 'Other sub-national statistics (reg_nat)	',
              type: 'branch',
              nodes: [],
            },
            {
              title: 'Land cover and land use, landscape (LUCAS) (lan)	',
              type: 'branch',
              nodes: [],
              meta: true,
            },
            { title: 'Non EU countries (noneu)	', type: 'branch', nodes: [] },
          ],
          type: 'branch',
        },
        { title: 'Economy and finance	', nodes: [], type: 'branch' },
        {
          title: 'Population and social conditions	',
          nodes: [],
          type: 'branch',
        },
        { title: 'Industry, trade and services	', nodes: [], type: 'branch' },
        {
          title: 'Agriculture, forestry and fisheries	',
          nodes: [],
          type: 'branch',
        },
        { title: 'International trade in goods	', nodes: [], type: 'branch' },
        { title: 'Transport	', nodes: [], type: 'branch' },
        { title: 'Environment and energy	', nodes: [], type: 'branch' },
        {
          title: 'Science, technology, digital society	',
          nodes: [],
          type: 'branch',
        },
      ],
      type: 'branch',
    },
    { title: 'Tables by themes', nodes: [], type: 'branch' },
    { title: 'Tables on EU policy', nodes: [], type: 'branch' },
    { title: 'Cross cutting topics', nodes: [], type: 'branch' },
    { title: 'New Items (sorted by code)', nodes: [], type: 'branch' },
    {
      title: 'Recently Updated Items (sorted by code)',
      nodes: [],
      type: 'branch',
    },
  ],
}

type TreeProps = Data & {
  style?: React.CSSProperties
  defaultOpen?: boolean
}

const getIcon = (hasNodes: boolean, isOpen?: boolean) => {
  if (!hasNodes) {
    return Icons.CloseSquareO
  }

  return isOpen ? Icons.MinusSquareO : Icons.PlusSquareO
}

const trans = (val: number) => `translate3d(${20 - 20 * val}px,0,0)`

const Tree = memo((props: TreeProps) => {
  const { style, defaultOpen = false } = props

  const [isOpen, setOpen] = useState(defaultOpen)
  const toggle = () => setOpen((prev) => !prev)

  const previous = usePrevious(isOpen)

  const [ref, { height: viewHeight }] = useMeasure()

  const { height, opacity } = useSpring({
    height: isOpen ? viewHeight : 0,
    opacity: isOpen ? 1 : 0,
  })

  const canExpand = props.type === 'branch' && props.nodes.length > 0

  const Icon = getIcon(canExpand, isOpen)

  return (
    <div className={classes.frame()}>
      <div
        onClick={canExpand ? toggle : undefined}
        style={{
          cursor: props.type === 'branch' ? 'pointer' : 'default',
          display: 'flex',
          alignItems: 'center',
          willChange: 'transform',
          gap: 4,
        }}
      >
        {props.type === 'leaf' ? (
          <Table />
        ) : (
          <Icon className={classes.toggle()} />
        )}
        {props.type === 'leaf' && <Table />}
        {props.type === 'leaf' && <Table />}
        <span className={classes.title()} style={style}>
          {props.title}
        </span>
        {props.meta ? <M /> : null}
      </div>

      <animated.div
        className={classes.content()}
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}
      >
        <animated.div style={{ transform: opacity.to(trans) }} ref={ref}>
          {props.type === 'branch'
            ? props.nodes.map((node) => <Tree {...node} key={node.title} />)
            : null}
        </animated.div>
      </animated.div>
    </div>
  )
})

export default () => <Tree {...data} defaultOpen />

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(value)

  useEffect(() => void (ref.current = value), [value])

  return ref.current
}

const M = () => (
  <svg viewBox='0 0 24 24' width={16}>
    <path d='M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z' />
  </svg>
)

const Table = () => (
  <svg viewBox='0 0 24 24' width={16}>
    <path d='M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z' />
  </svg>
)
