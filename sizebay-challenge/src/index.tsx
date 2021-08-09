import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { GlobalStyles } from './styles'

const AppContainer = () => {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
