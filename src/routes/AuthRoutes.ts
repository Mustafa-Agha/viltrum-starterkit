import { lazy } from 'react';

const authRoutes: any[] = [
  {
    path: '/auth/login',
    name: 'Login',
    component: lazy(() => import('pages/auth/Login')),
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: lazy(() => import('pages/auth/Register')),
  },
];

export default authRoutes;
