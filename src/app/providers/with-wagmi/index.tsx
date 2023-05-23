import { ReactNode } from 'react';
import { client } from 'shared/config/wagmi';

import { WagmiConfig } from 'wagmi';

// eslint-disable-next-line react/display-name
export const withWagmi = (component: () => ReactNode) => () => (
  <WagmiConfig client={client}>
    {component()}
  </WagmiConfig>
);
