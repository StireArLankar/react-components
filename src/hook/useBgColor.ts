import { useEffect } from 'react'

const useBGColor = (red: number, green: number, blue: number) => {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--bg-color', `rgb(${red}, ${green}, ${blue})`)
  }, [blue, green, red])
}

export default useBGColor
