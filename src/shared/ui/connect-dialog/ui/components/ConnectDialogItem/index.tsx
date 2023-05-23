/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from '@mui/material';
import { classNames } from 'shared/lib/classnames';

import { WalletConfigV2 } from '../..';

import cls from './style.module.scss';

interface ConnectDialogItemProps extends WalletConfigV2 {
    className?: string;
    onClick: () => void;
}

export const ConnectDialogItem = ({
  icon, title, className, onClick
}: ConnectDialogItemProps) => {
  const Icon = icon;
  return (
    <div onClick={onClick} className={classNames(cls.wallet_item, {}, [className])}>
      <Icon />
      <Typography
        className={cls.wallet_text}
        sx={{ fontWeight: 700, fontSize: 12 }}
      >
        {title}
      </Typography>
    </div>
  );
};
