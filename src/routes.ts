import { HomePage } from './pages';
import NotFoundPage from './pages/NotFoundPage';

export const Routes: RouteType[] = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export interface RouteType {
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
}
