import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as actions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputEditing') textInputEditing!: ElementRef;
  checkCompleted!: FormControl;
  textInput!: FormControl;
  editing: boolean = false;
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe((value) => {
      console.log(value);
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
  }

  editTodo() {
    this.editing = true;
    this.textInput.setValue(this.todo.text);
    setTimeout(() => {
      this.textInputEditing.nativeElement.select();
    }, 1);
  }

  finishEditing() {
    this.editing = false;
    if (
      this.textInput.invalid ||
      this.textInput.value === this.todo.text
    ) { return; }
    this.store.dispatch(actions.editTodo({
      id: this.todo.id,
      editedText: this.textInput.value
    }))
  }

  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}))
  }
}
