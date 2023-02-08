import type { Decorator } from '@storybook/react'

import '~/theme/theme.css'

export const withCustomTheme: Decorator<any> = (storyfn) => <>{storyfn()}</>
