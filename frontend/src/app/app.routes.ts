import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppComponent} from './app.component';
import {TaskCreateComponent} from './tasks/create/task-create.component';
import {TasksOverviewComponent} from './tasks/overview/tasks-overview.component';
import {UserCreateComponent} from './users/create/user-create.component';
import {UsersOverviewComponent} from './users/overview/users-overview.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksOverviewComponent,
  },
  {
    path: 'create-task',
    component: TaskCreateComponent,
  },
  {
    path: 'create-user',
    component: UserCreateComponent,
  },
  {
    path: 'users',
    component: UsersOverviewComponent,
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
