import { createAction, props } from "@ngrx/store";

export const createTodo = createAction(
  '[TODO] Crea Todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
)

export const editTodo = createAction(
  '[TODO] Editar Todo',
  props<{ id: number; editedText: string }>()
)

export const deleteTodo =  createAction(
  '[TODO] Borrar Todo',
  props<{ id: number }>()
)

export const toggleAll = createAction(
  '[TODO] Toggle All Todos',
  props<{completed: boolean}>()
)

export const clearCompleted = createAction(
  '[TODO] Clear completed'
);
