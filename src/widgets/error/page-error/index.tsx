import { Button, Typography } from '@mui/material';
import { classNames } from 'shared/lib/classnames';

import cls from './style.module.scss';

interface PageErrorProps {
  className?: string;
}

const reloadPage = () => {
  window.location.reload();
};

export const PageError = ({ className }: PageErrorProps) => (
  <div className={classNames(cls.page_error, {}, [className])}>
    <Typography>
      Oops!
    </Typography>
    <Typography
      className={cls.subtitle}
    >
      There is an error occured. Please refresh the page or contact support.
    </Typography>
    <Button onClick={reloadPage}>Reload page</Button>
  </div>
);
