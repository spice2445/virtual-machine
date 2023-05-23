import { classNames } from 'shared/lib/classnames';

import useAuth from 'shared/lib/use-auth';

import { Modal } from 'shared/ui/modal';

import cls from './style.module.scss';
import { ConnectDialogItem } from './components/ConnectDialogItem';

export type WalletConfigV2<T = unknown> = {
  id: string;
  title: string;
  icon: any;
  connectorId: T;
}

interface ConnectDialogProps {
    className?: string;
    active: boolean;
    wallets: WalletConfigV2[]
    // eslint-disable-next-line no-unused-vars
    setActive: (value: boolean) => void;
}

export const ConnectDialog = ({
  className, active, wallets, setActive
}: ConnectDialogProps) => {
  const closeModal = () => setActive(false);
  const { login } = useAuth();

  const onClick = async (connectorId: any) => {
    await login(connectorId);
    closeModal();
  };

  return (
    <Modal
      className={classNames('', {}, [className])}
      lazy
      onClose={closeModal}
      isOpen={active}
      title='Connect to wallet'
    >
      <div className={cls.connect_dialog}>
        {wallets.map(({
          icon, id, title, connectorId
        }) => (
          <ConnectDialogItem
            id={id}
            onClick={() => onClick(connectorId)}
            connectorId={connectorId}
            className={cls.connect_dialog_item}
            key={id}
            icon={icon}
            title={title}
          />
        ))}
      </div>

    </Modal>

  );
};
