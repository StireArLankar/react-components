type GetTextWidth = { (text: string, font: string): number } & {
  canvas?: HTMLCanvasElement
}

export const getTextWidth: GetTextWidth = (text, font) => {
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'))

  const context = canvas.getContext('2d')

  if (!context) {
    return 0
  }

  context.font = font
  const metrics = context.measureText(text)
  return metrics.width
}
