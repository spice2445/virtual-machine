import React from 'react';

import { RouteProps } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import { AppRoutes } from 'shared/config/route';

export const renderRoutes = (routes: Record<AppRoutes, RouteProps>): JSX.Element => (
  <Routes>
    {Object.values(routes).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={(
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {element}
          </>
        )}
      />
    ))}
  </Routes>
);
