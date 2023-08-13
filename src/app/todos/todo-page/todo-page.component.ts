import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as actions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  completed: boolean = false;
  constructor(private store: Store<AppState>){}
  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAll({completed:this.completed}))
  }
}
