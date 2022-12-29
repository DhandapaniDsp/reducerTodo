import { ACTIONS } from "./actions";
function newTodo(todo) {
  return { id: Date.now(), todo: todo };
}

export const reducer = (todos = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.todo)];

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.DELETE_ALL_TODO:
      return []

    default:
      return todos;
  }
};
