import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  extend: {
    '*, *::before, *::after': {
      borderColor: 'gray.a4',
    },
    '*::selection': {
      bg: 'colorPalette.a3',
    },
    '*::placeholder': {
      opacity: 1,
      color: 'fg.subtle',
    },
    body: {
      background: 'gray.1',
      color: 'fg.default',
    },
  },
})
