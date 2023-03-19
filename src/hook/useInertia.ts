import { useCallback } from 'react'

import {
  useSpring,
  SpringValues,
  SpringRef,
  SpringConfig,
  UseSpringProps,
} from '@react-spring/web'

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
  SpringValues<T>,
  SpringRef<T & { config: IConfig<T> }>['set']
]

export const useInertia = <T extends Record<string, any>>(
  initialProps: UseSpringProps<T & { config: IConfig<T> }>
): UseInertia<T> => {
  //@ts-ignore
  const [props, spring] = useSpring(() => initialProps) as any

  const setInertia = useCallback<SpringRef<T & { config: IConfig<T> }>['set']>(
    ({ config = {}, ...to }) => {
      const { inertia, bounds, velocities, ...rest }: any = config

      if (!inertia) {
        spring.start({ ...to, config: rest })
        return
      }

      spring.start({
        ...to,
        onChange: (values: any) => {
          Object.entries(values.value as any).forEach(([key, v]: any) => {
            const vel = (props as any)[key].velocity
            const bound =
              v >= bounds[key][1]
                ? bounds[key][1]
                : v <= bounds[key][0]
                ? bounds[key][0]
                : undefined

            if (bound !== undefined) {
              ;(props as any)[key].stop()
              spring.start({
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
    },
    [props, spring]
  )

  return [props, setInertia] as UseInertia<T>
}
