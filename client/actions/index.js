import { getBooks } from '../apis/apiClient'

export const SET_BOOKS_PENDING = 'SET_BOOKS_PENDING'
export const SET_BOOKS_SUCCESS = 'SET_BOOKS_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export function fetchBooks () {
  return (dispatch, getState) => {
    dispatch(setBooksPending())
    return getBooks()
      .then(books => {
        dispatch(setBooksSuccess(books))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function setBooksPending () {
  return {
    type: SET_BOOKS_PENDING
  }
}

export function setBooksSuccess (books) {
  return {
    type: SET_BOOKS_SUCCESS,
    books
  }
}

export function setError (errMessage) {
  return {
    type: SET_ERROR,
    errMessage
  }
}
