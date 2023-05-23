/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classnames';

import { routes } from 'shared/config/route';
import { renderRoutes } from 'shared/lib/render-routes';
import { ToastContainer } from 'react-toastify';

export const Routing = (): JSX.Element => (
  <div className={classNames('app', {}, [])}>
    {renderRoutes(routes)}
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
  </div>
);
