import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { theme } from './config/theme'
import MainSerp from './scenes/MainSerp'
import GlobalStyles from './config/globalStyles.js'
import configStore from './store'
import { loadState, saveState } from './utils/index'

// Persist Redux into LocalStorage
function getStore() {
  const persistedState = loadState()
  const store = configStore(persistedState)
  store.subscribe(() => {
    saveState({
      favoriteItem: store.getState().data.favoriteItem,
      filters: store.getState().data.filters
    })
  })
  return store
}

const App = () => (
  <Provider store={getStore()}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainSerp />
    </ThemeProvider>
  </Provider>
)

export default App
