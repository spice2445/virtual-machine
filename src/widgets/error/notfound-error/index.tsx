import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { classNames } from 'shared/lib/classnames';

import cls from './style.module.scss';

interface NotFoundErrorProps {
  className?: string;
}

export const NotFoundError = ({ className }: NotFoundErrorProps) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div data-testid='notfound-error' className={classNames(cls.notfound_error, {}, [className])}>
      <Typography>
        404
      </Typography>
      <Typography
        className={cls.subtitle}
      >
        Page not found
      </Typography>

      <Button onClick={goBack}>Go back</Button>
    </div>
  );
};
