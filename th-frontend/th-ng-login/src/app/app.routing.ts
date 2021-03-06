import { Routes } from '@angular/router';

import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginGuard } from 'th-ng-commons';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];
