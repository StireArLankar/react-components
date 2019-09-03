import { useEffect } from 'react'

const useBGColor = (red, green, blue) => {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--bg-color', `rgb(${red}, ${green}, ${blue})`)
  }, [])
}

export default useBGColor
