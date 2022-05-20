import { SET_BOOKS_SUCCESS } from '../actions'

const initialState = [{ id: 0, title: 'The Famous Five', author: 'Enid Blyton' }]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS_SUCCESS:
      return action.books
    default:
      return state
  }
}

export default reducer
