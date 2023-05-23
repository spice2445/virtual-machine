/* eslint-disable no-return-await */
import { RouteProps } from 'react-router-dom';
import { namedLazy } from 'shared/lib/lazy-load';

const MainPage = namedLazy(async () => await import('pages/main'), 'MainPage');
const NotFoundPage = namedLazy(async () => await import('pages/not-found'), 'NotFoundPage');

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
