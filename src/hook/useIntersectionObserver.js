import { useState, useRef, useEffect } from 'react'

export const useIntersectionObserver = () => {
  const [isIntersecting, setisIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const cb = (entries) => {
      entries.forEach((entry) => {
        setisIntersecting(entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(cb, {
      root: null,
      rootMargin: '0px',
      threshold: 0
    })

    ref.current && observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return [isIntersecting, ref]
}

export default useIntersectionObserver
