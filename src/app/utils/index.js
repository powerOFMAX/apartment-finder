import moment from 'moment'
import postings from '../config/mockedPosting'
/* eslint-disable */

/**
 *
 * @param {string} operationType
 * @param {string} direction
 */
export const getFilteredPosts = (operationType, direction = '') => {
  if (operationType == 4 && !direction) return postings

  // OperationType Filter
  const newPostings = postings.filter((post) => {
    if (operationType == 4) return postings
    return post.operation_type.operation_type_id == operationType
  })

  // Direction Filter
  if (direction) {
    const withDirection = newPostings.filter((post) => {
      direction = direction.trim().toLocaleLowerCase()
      const postingLocation = Object.values(post.posting_location).join().toLocaleLowerCase()
      return (postingLocation.indexOf(direction) !== -1)
    })
    return withDirection
  }

  return newPostings
}

/**
 * Load State from LocalStorage
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    const data = JSON.parse(serializedState)
    const { operationType, direction } = data.filters
    const newValue = { data, list: getFilteredPosts(operationType, direction) }
    return newValue
  } catch (err) {
    return undefined
  }
}

/**
 * Save current State into LocalStorage
 * @param {*} state
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // Ignore
  }
}

/**
 *
 * @param {string} oldDate
 * @returns {number}
 */
export const getDateDifference = (oldDate) => {
  const now = moment()
  const date = moment(oldDate, 'DD-MM-YYYY')
  const duration = parseInt(moment.duration(now.diff(date)).asDays(), 10)
  return duration
}
