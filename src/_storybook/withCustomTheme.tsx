import type { DecoratorFn } from '@storybook/react'

import '~/theme/theme.css'

export const withCustomTheme: DecoratorFn = (storyfn) => <>{storyfn()}</>
