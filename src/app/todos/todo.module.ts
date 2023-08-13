import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './filter-pipe.pipe';



@NgModule({
  declarations: [
    TodoFooterComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoPageComponent,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
