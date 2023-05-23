import { ReactNode, Suspense } from 'react';

// eslint-disable-next-line react/display-name
export const withSuspense = (component: () => ReactNode) => () => (
  <Suspense fallback=''>{component()}</Suspense>
);
