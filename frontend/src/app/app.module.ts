import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaskService} from './services/task.service';
import {TasksOverviewComponent} from './tasks/overview/tasks-overview.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskCreateComponent} from './tasks/create/task-create.component';
import {appRoutes} from './app.routes';
import {ReactiveFormsModule} from '@angular/forms';
import {SingleTaskComponent} from './tasks/overview/single-task.component';
import {UserService} from './services/user.service';
import {UserCreateComponent} from './users/create/user-create.component';
import {UsersOverviewComponent} from './users/overview/users-overview.component';
import {SingleUserComponent} from './users/overview/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksOverviewComponent,
    TaskCreateComponent,
    SingleTaskComponent,
    UserCreateComponent,
    UsersOverviewComponent,
    SingleUserComponent
  ],
  imports: [
    appRoutes,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
