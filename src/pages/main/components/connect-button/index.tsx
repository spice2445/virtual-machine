import { useState } from 'react';

import { Button } from '@mui/material';

import { walletsConfig } from 'shared/config/wallet';
import { ConnectDialog } from 'shared/ui/connect-dialog';

export const ConnectButton = () => {
  const [active, setActive] = useState(false);
  const wallets = walletsConfig();

  const openModal = () => setActive((prev) => !prev);
  return (
    <>
      <Button size='large' variant='outlined' color='secondary' onClick={openModal}>Connect wallet</Button>
      <ConnectDialog wallets={wallets} setActive={setActive} active={active} />
    </>
  );
};
