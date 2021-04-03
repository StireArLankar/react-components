/// <reference types="react-scripts" />

declare module 'lodash-move' {
  export default function fn(...args: any[]): any
}

declare module 'lodash-es/clamp' {
  export default function fn(...args: number[]): number
}

declare module 'lodash-es/debounce' {
  export default function fn<T extends unknown[], K>(
    a1: (...args: T) => K,
    a2: number
  ): (...args: T) => K
}
