import { useCallback } from 'react'
import {
  useSpring,
  AnimatedValue,
  SetUpdateFn,
  SpringConfig,
  UseSpringProps,
} from 'react-spring'

export interface InertialConfig<T extends {}> extends SpringConfig {
  inertia: true
  bounds: Record<keyof T, [number, number]>
  velocities: Record<keyof T, number>
  decay?: boolean
}

export interface NoninertialConfig extends SpringConfig {
  inertia?: false
  decay?: boolean
}

type IConfig<T extends {}> = InertialConfig<T> | NoninertialConfig

export type UseInertia<T extends {}> = [
  AnimatedValue<T>,
  SetUpdateFn<T & { config: IConfig<T> }>
]

export const useInertia = <T extends Record<string, any>>(
  initialProps: UseSpringProps<any>
): UseInertia<T> => {
  const [props, set]: any = useSpring(() => initialProps)

  const setInertia = useCallback<SetUpdateFn<T & { config?: IConfig<T> }>>(
    ({ config = {}, ...to }) => {
      const { inertia, bounds, velocities, ...rest }: any = config as IConfig<T>
      if (inertia) {
        set({
          ...to,
          onFrame: (values: T) => {
            Object.entries(values).forEach(([key, v]) => {
              const vel = props[key].velocity
              const bound =
                v >= bounds[key][1]
                  ? bounds[key][1]
                  : v <= bounds[key][0]
                  ? bounds[key][0]
                  : undefined
              if (bound !== undefined) {
                props[key].stop()
                set({
                  [key]: bound,
                  config: { decay: false, velocity: vel } as any,
                })
              }
            })
          },
          config: (k: string) => ({
            decay: true,
            velocity: velocities && velocities[k],
          }),
        })
      } else {
        set({ ...to, config: rest })
      }
    },
    [props, set]
  )

  return [props, setInertia] as UseInertia<T>
}
