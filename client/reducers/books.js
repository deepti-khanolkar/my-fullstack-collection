import { SET_BOOKS_SUCCESS } from '../actions'

const initialState = [{ id: 1, title: 'Ready Player One', author: 'Ernest Cline' }]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS_SUCCESS:
      return action.books
    default:
      return state
  }
}

export default reducer
