import { useState, useRef, useEffect } from 'react'

export const useIntersectionObserver = <T>(): [boolean, React.MutableRefObject<T>] => {
  const [isIntersecting, setisIntersecting] = useState(false)
  const ref = useRef<T>(null as any)

  useEffect(() => {
    const cb = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setisIntersecting(entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(cb, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    })

    ref.current && observer.observe(ref.current as any)

    return () => observer.disconnect()
  }, [])

  return [isIntersecting, ref]
}

export default useIntersectionObserver
