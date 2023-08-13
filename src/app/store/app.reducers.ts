import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "../todos/models/todo.model";
import { todoReducer } from './reducers/todo.reducer';
import { filterReducer } from "./reducers/filter.reducer";
import { validFilters } from "./actions/filter.actions";

export interface AppState {
  todos: Array<Todo>;
  filter: validFilters;
}

// ActionReducerMap para englobar todos los reducers de la aplicacion
//necesita que se le pase como parametro generico, el tipo del estado que va a gestionar
//en este caso AppState
export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
