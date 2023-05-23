import { useAccount } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';

import { Container } from 'shared/ui/container';
import { Logo } from 'shared/ui/logo';

import cls from './style.module.scss';

import { contractAbi } from './config/abi';
import { contractAddress } from './config/const';

import { ConnectButton, ConnectForm } from './components';

export const MainPage = (): JSX.Element => {
  const { isConnected } = useAccount();

  return (
    <Container>
      <Logo className={cls.logo} />
      {!isConnected && <ConnectButton />}

      {isConnected && (
        <ConnectForm
          bscTestnet={bscTestnet}
          contractAbi={contractAbi}
          contractAddress={contractAddress}
        />
      )}
    </Container>
  );
};
