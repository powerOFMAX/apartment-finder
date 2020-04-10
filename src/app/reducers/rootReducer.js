import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  UPDATE_LIST
} from '../actions/types'
import postings from '../config/mockedPosting'
import { getFilteredPosts } from '../utils'

const initialState = {
  data: {
    favoriteItem: [],
    filters: {
      operationType: '4',
      direction: ''
    }
  },
  list: postings
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        data: { ...state.data, favoriteItem: [...state.data.favoriteItem, action.id] }
      }
    case REMOVE_FAVORITE:
      const { favoriteItem } = state.data
      const newItems = favoriteItem.filter((element) => element !== action.id)
      return { ...state, data: { ...state.data, favoriteItem: newItems } }
    case UPDATE_LIST:
      const { operationType, direction } = action
      const newValues = getFilteredPosts(operationType, direction)
      return { ...state, data: { ...state.data, filters: { operationType, direction } }, list: newValues }
    default:
      return state
  }
}

export default rootReducer
