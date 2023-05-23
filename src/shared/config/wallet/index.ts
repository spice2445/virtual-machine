import { WalletConfigV2 } from 'shared/ui/connect-dialog/ui';

import Metamask from './assets/Metamask.svg';
import WalletConnect from './assets/WalletConnect.svg';
import Coin98 from './assets/Coin98.svg';
import Coinbase from './assets/Coinbase.svg';

import type { Ethereum } from '@wagmi/core';

export interface ExtendEthereum extends Ethereum {
  isCoin98?: true
}

declare global {
  interface Window {
    coin98?: true
    // @ts-ignore */
    ethereum?: ExtendEthereum
  }
}

export enum ConnectorNames {
    MetaMask = 'metaMask',
    Injected = 'injected',
    WalletConnect = 'walletConnect',
    WalletLink = 'coinbaseWallet',
  }

export const walletsConfig = (): WalletConfigV2<ConnectorNames>[] => [
  {
    id: 'metamask',
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.MetaMask
  },
  {
    id: 'coinbase',
    title: 'Coinbase Wallet',
    icon: Coinbase,
    connectorId: ConnectorNames.WalletLink
  },
  {
    id: 'walletconnect',
    title: 'WalletConnect',
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect
  },
  {
    id: 'coin98',
    title: 'Coin98',
    icon: Coin98,
    connectorId: ConnectorNames.Injected
  }
];
