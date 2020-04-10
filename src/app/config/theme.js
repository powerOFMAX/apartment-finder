import { css } from 'styled-components'

/**
 * I wanted to provide some names to the colors so I used this page to name them
 *
 * https://www.color-blindness.com/color-name-hue/
 */
export const theme = {
  colors: {
    plan: {
      SUPERHIGHLIGHTED: '#9371e0',
      HIGHLIGHTED: '#31d1a1',
      SIMPLE: 'transparent'
    },
    charcoal: '#4d4d4d',
    nightRider: '#333',
    grey: '#848484',
    acadia: '#1ea7dd',
    wheatfield: '#dddcbd',
    pumpkin: '#fc7b27',
    whiteSmoke: '#f2f2f2',
    summerSky: '#2b9ddd',
    malibu: '#61c1e7'
  }
}

const breakpoints = {
  small: 768,
  medium: 1024,
  large: 1280,
  xlarge: 1400
}

// Iterate through the sizes and create a media template
export const maxWidth = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] - 1}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
