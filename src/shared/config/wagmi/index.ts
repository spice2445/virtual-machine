import { configureChains, createClient } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const { chains, provider, webSocketProvider } = configureChains(
  [bscTestnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_PROVIDER }), publicProvider()]
);

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: { appName: 'Virtual-machine' }
});

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    showQrModal: true,
    projectId: process.env.WALLETCONNECT_APP_ID
  }
});
export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});

export const client = createClient({
  autoConnect: true,
  connectors: [
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector
  ],
  provider,
  webSocketProvider
});
