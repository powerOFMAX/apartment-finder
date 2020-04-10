import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

const enhancer = composeWithDevTools()

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  )
}
