import App from '@/App';
import { DashboardLayout, MainLayout } from '@/layouts';
import { Dashboard } from '@/pages/dashboard';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
];
