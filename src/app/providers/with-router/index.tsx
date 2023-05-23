import { Suspense, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageLoader } from 'widgets/page-loader';

// eslint-disable-next-line react/display-name
export const withRouter = (component: () => ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<PageLoader />}>{component()}</Suspense>
  </BrowserRouter>
);
