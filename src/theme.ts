export enum Color {
  white = '#FFFFFF',
  black = '#242424',
  charcoal = '#232c31',
  green = '#0ee07b',
  grey = '#2f3e45',
  dark = '#141a1d'
}

const theme = {
  fontWeights: [0, 300, 400, 500, 600, 700],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
    button: 3,
  },
  colors: {
    white: Color.white,
    black: Color.black,
    charcoal: Color.charcoal,
    green: Color.green,
    grey: Color.grey,
    dark: Color.dark
  },
  buttonSizes: {
    medium: {
      fontSize: '1rem',
      height: '2.5rem',
    },
  }
}

export default theme