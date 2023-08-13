import { createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from '../actions/filter.actions';


export const initialState: validFilters = 'all';

export const _filterReducer = createReducer<validFilters>(
  initialState,
  on(setFilter, (_state, { filter }) => filter)
);

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action)
}
