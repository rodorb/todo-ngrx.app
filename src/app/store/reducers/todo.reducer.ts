import { createReducer, on } from '@ngrx/store'
import * as todoActions from '../actions/todo.actions'
import { Todo } from '../../todos/models/todo.model';

const initialState: Array<Todo> = [
  new Todo('Save the world'),
  new Todo('Defeat Thanos'),
  new Todo("Buy Iron man's armor"),
  new Todo("Steal Captain america's shield"),
]
const _todoReducer = createReducer(
  initialState,
  on(
    todoActions.createTodo,
    (state, { text: newTodoText }) => {
      return [...state, new Todo(newTodoText)]
    }
  ),
  on(todoActions.toggle,
    (state, { id }) => {
      //map devuelve un nuevo array
      return state.map((todo) => {
        //necesito devolver un nuevo objeto, ya que si no,
        //se mutan los objetos del array del estado
        //LOS REDUCER TIENEN QUE DEVOLVER SIEMPRE UN NUEVO ESTADO NO MUTAR EL ESTADO ACTUAL
        return {
          ...todo,
          completed: todo.id === id ? !todo.completed : todo.completed
        };
      })
    }
  ),

  on(todoActions.editTodo,
    (state, { id, editedText }) => {
      return state.map((todo) => {
        return {
          ...todo,
          text: todo.id === id ? editedText : todo.text
        };
      }
      )
    }),

  on(todoActions.deleteTodo,
    (state, { id }) => {
      return state.filter(todo => todo.id !== id)
    }
  ),
  on(todoActions.toggleAll,
    (state, { completed }) => {
      if (state.every(todo => todo.completed === completed)) {
        return state.map(todo => {
          return {
            ...todo,
            completed: !completed
          }
        })
      }
      return state.map(todo => {
        return {
          ...todo,
          completed
        }
      })
    }
  ),
  on(todoActions.clearCompleted,
    (state) => {
      return state.filter(todo => !todo.completed);
    })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action)
}
