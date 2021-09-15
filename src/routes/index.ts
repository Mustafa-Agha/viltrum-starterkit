import { lazy } from 'react';
import {
  DashboardOutlined,
  DotChartOutlined,
  FundOutlined,
} from '@ant-design/icons';

const routes: any[] = [
  {
    key: 'dashboards',
    path: '/dashboard',
    name: 'Dashboard',
    title: 'sidenav.dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    authenticated: true,
    component: lazy(() => import('pages/dashboard')),
    submenu: [
      {
        key: 'dashboards-default',
        path: '/dashboards/default',
        title: 'sidenav.dashboard.default',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'dashboards-analytic',
        path: '/dashboards/analytic',
        title: 'sidenav.dashboard.analytic',
        icon: DotChartOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'dashboards-sales',
        path: '/dashboards/sales',
        title: 'sidenav.dashboard.sales',
        icon: FundOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

export default routes;
