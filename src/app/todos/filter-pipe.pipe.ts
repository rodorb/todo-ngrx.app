import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../store/actions/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipePipe implements PipeTransform {

  transform(todos: Array<Todo>, filter: validFilters): Array<Todo> {


    switch (filter) {
      case 'completed':
        return todos.filter(t => t.completed);
      case 'pending':
        return todos.filter(t => !t.completed);
      default:
        return todos;

    }
    return [];
  }

}
