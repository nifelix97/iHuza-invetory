export const ACTIONS = {
    ADD_TODO: 'add-todo',
    REMOVE_TODO: 'remove-todo',
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload]
    case ACTIONS.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}

export default todoReducer