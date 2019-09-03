import React, { useEffect } from 'react'

const withBGColor = (red, green, blue) => Component => props => {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--bg-color', `rgb(${red}, ${green}, ${blue})`);
  }, [])

  return <Component {...props} />
}

export default withBGColor
