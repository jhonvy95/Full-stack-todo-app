import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./user/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
];
