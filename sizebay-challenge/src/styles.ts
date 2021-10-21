import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #8c8c8c #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #8c8c8c;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const customMediaQuery = (width: number, max?: boolean) => {
  if (max) {
    return `@media (max-width: ${width}px)`
  }
  return `@media (min-width: ${width}px)`
}
export const media = {
  custom: customMediaQuery,
  large: customMediaQuery(900),
  small: customMediaQuery(768),
  xsmall: customMediaQuery(500),
  maxXsmall: customMediaQuery(600, true),
}
