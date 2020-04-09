import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './config/theme'
import MainSerp from './scenes/MainSerp'
import GlobalStyles from './config/globalStyles.js'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <MainSerp />
  </ThemeProvider>
)

export default App
