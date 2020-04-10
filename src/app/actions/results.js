import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  UPDATE_LIST
} from './types'


export function changeFavorite(isFavorite, id) {
  if (!isFavorite) return { type: ADD_FAVORITE, id }
  return { type: REMOVE_FAVORITE, id }
}

export function applyFiltersToResults(operationType, direction = '') {
  return { type: UPDATE_LIST, operationType, direction }
}
