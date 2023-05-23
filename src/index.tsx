import { createRoot } from 'react-dom/client';

import App from 'app';

import { WithErrorBoundary } from 'app/providers/with-errorboundary';

import 'app/styles/index.scss';
import 'react-toastify/scss/main.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <WithErrorBoundary>
    <App />
  </WithErrorBoundary>
);
