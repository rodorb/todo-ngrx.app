import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/store/actions/filter.actions';
import { AppState } from 'src/app/store/app.reducers';
import * as todoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  pendingTasks: number = 0;
  currentFilter: actions.validFilters = 'all';
  filters: Array<actions.validFilters> = ['all', 'pending', 'completed']
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe(currFilter => {
    //   this.currentFilter = currFilter;
    // });

    //me suscribo a todo el state del store
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pendingTasks = state.todos.filter(t => !t.completed)?.length;
    })
  }


  public changeFilter(selectedFilter: actions.validFilters): void {
    this.store.dispatch(actions.setFilter({ filter: selectedFilter }));
  }
  public clearCompletedTodos(): void {
    //TODO: implement
    this.store.dispatch(todoActions.clearCompleted())
  }
}
