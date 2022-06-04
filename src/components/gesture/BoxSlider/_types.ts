export type BoxSliderProps = {
  rotate: (num: number) => string
  int: (x: number, count: number, i: number) => number
  step: number
  start?: number
}
