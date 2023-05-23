import compose from 'compose-function';

import { withRouter } from './with-router';
import { withSuspense } from './with-suspense';
import { withWagmi } from './with-wagmi';

export const withProviders = compose(withSuspense, withRouter, withWagmi);
