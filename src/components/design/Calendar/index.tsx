import { useRef, useState } from 'react'
import useMeasure from 'react-use-measure'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getMonth as _getMonth,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  Variants,
} from 'framer-motion'

import classes from './_classes.css'

const formatString = 'MMM-yyyy'

const getMonth = (date: Date) => format(date, formatString)

const variants: Variants = {
  initial: (direction) => ({
    opacity: 0,
    position: 'absolute',
    x: -direction.current * 100,
  }),
  animate: () => ({ opacity: 1, position: 'relative', x: 0 }),
  exit: (direction) => ({
    opacity: 0,
    position: 'absolute',
    x: direction.current * 100,
    transition: { opacity: { duration: 0.2 } },
  }),
}

// function to capitalize first letter of a string
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const SAFARI_OFFSET_FIX = 1
const getMonthsForLocale = (locale = navigator.language) => {
  const format = new Intl.DateTimeFormat(locale, { month: 'long' })
  const months = []
  for (let month = 0; month < 12; month++) {
    const testDate = new Date(0, month, 1 + SAFARI_OFFSET_FIX, 0, 0, 0)
    months.push(capitalize(format.format(testDate)))
  }
  return months
}

const monthsNames = getMonthsForLocale()

// TODO use Reducer instead of this code with inline values
// and fix months and all this
const Component = () => {
  const [selectedDay, setSelectedDay] = useState(startOfToday)
  const [currentMonth, setCurrentMonth] = useState(() => getMonth(selectedDay))

  const directionRef = useRef(-1)

  const [isAnimating, setIsAnimating] = useState(false)

  const firstDayCurrentMonth = parse(currentMonth, formatString, new Date())

  const [ref, { height }] = useMeasure()

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  })

  const previousMonth = () => {
    if (isAnimating) {
      return
    }

    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, formatString))
    directionRef.current = 1
    setIsAnimating(true)
  }

  const nextMonth = () => {
    if (isAnimating) {
      return
    }

    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, formatString))
    directionRef.current = -1
    setIsAnimating(true)
  }

  // const selectedDayMeetings = meetings.filter((meeting) =>
  //   isSameDay(parseISO(meeting.startDatetime), selectedDay)
  // )

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <button className={classes.control} onClick={previousMonth}>
          {'<'}
        </button>
        <p className={classes.headerText}>
          {monthsNames[_getMonth(firstDayCurrentMonth)]}
          {format(new Date(currentMonth), ' yyyy')}
        </p>
        <button className={classes.control} onClick={nextMonth}>
          {'>'}
        </button>
      </header>

      <div className={classes.headerGrid}>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>

      <AnimateSharedLayout>
        <motion.div
          animate={{ height: height > 0 ? height : undefined }}
          layout
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div ref={ref}>
            <AnimatePresence
              initial={false}
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={currentMonth}
                layout
                className={classes.grid}
                variants={variants}
                custom={directionRef}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ type: 'tween' }}
              >
                {days.map((day) => (
                  <div key={day.toString()} className={classes.itemWrapper}>
                    <button
                      type='button'
                      onClick={() =>
                        isSameMonth(day, firstDayCurrentMonth)
                          ? setSelectedDay(day)
                          : void 0
                      }
                      className={classes.item({
                        selected: isEqual(day, selectedDay),
                        today: isToday(day),
                        otherMonth: !isSameMonth(day, firstDayCurrentMonth),
                      })}
                    >
                      <time dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                    </button>

                    {/* <div className='w-1 h-1 mx-auto mt-1'>
                      {meetings.some((meeting) =>
                        isSameDay(parseISO(meeting.startDatetime), day)
                      ) && <div className='w-1 h-1 rounded-full bg-sky-500' />}
                    </div> */}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimateSharedLayout>
    </div>
  )
}

export default Component
