import { styleVariants } from '@vanilla-extract/css'

export default {
  font: styleVariants({
    bold: {
      fontSize: 30,
      lineHeight: 1,
      fontWeight: 700,
      fontFamily: 'Roboto',
    },
    regular: {
      fontSize: 30,
      lineHeight: 1,
      fontWeight: 400,
      fontFamily: 'Roboto',
    },
  }),
}
