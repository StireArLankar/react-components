import React, { useEffect } from 'react'

export const withBGColor =
  <T extends {}>(red: number, green: number, blue: number) =>
  (Component: React.ComponentType<T>) =>
  (props: T) => {
    useEffect(() => {
      const root = document.documentElement
      root.style.setProperty('--bg-color', `rgb(${red}, ${green}, ${blue})`)
    }, [])

    return <Component {...props} />
  }

export default withBGColor
