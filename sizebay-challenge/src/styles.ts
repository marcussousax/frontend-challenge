import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`
export const media = {
  custom: customMediaQuery,
  large: customMediaQuery(900),
  small: customMediaQuery(768),
  xsmall: customMediaQuery(576),
}
