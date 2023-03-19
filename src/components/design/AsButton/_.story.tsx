import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { NeonButtonV2 } from '../Neon/NeonV2'

// import AsButtonExpensive from './exprensiveForTypescript'

import AsButton from '.'

const meta = {
  title: 'Design/AsButtonV2',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export default meta

export const Test = () => {
  return (
    <div>
      <AsButton onClick={() => console.log('test1')}>Test</AsButton>
      <AsButton asChild>
        <a
          href='#asd'
          onClick={(e) => {
            console.log('test2')
            e.preventDefault()
          }}
        >
          Test
        </a>
      </AsButton>
      <AsButton asChild>
        <NeonButtonV2 onClick={() => console.log('test3')}>Test</NeonButtonV2>
      </AsButton>
    </div>
  )
}

// export const Test2 = () => {
//   return (
//     <div>
//       <AsButtonExpensive onClick={() => console.log('test1')}>
//         Test
//       </AsButtonExpensive>
//       <AsButtonExpensive
//         component='a'
//         href='#asd'
//         onClick={(e) => {
//           console.log('test2')
//           e.preventDefault()
//         }}
//       >
//         Test
//       </AsButtonExpensive>
//       <AsButtonExpensive
//         component={NeonButtonV2}
//         onClick={() => console.log('test3')}
//       >
//         Test
//       </AsButtonExpensive>
//     </div>
//   )
// }
