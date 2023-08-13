import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ngrx
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: !isDevMode(),
      trace: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
