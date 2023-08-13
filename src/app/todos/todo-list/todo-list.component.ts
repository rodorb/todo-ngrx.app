import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../store/app.reducers';
import { Observable } from 'rxjs';
import { validFilters } from 'src/app/store/actions/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Array<Todo>> = this.store.select('todos');
  selectedFilter$: Observable<validFilters> = this.store.select('filter');
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
  }
}
