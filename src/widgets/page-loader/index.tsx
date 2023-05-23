import { classNames } from 'shared/lib/classnames';
import { Loader } from 'shared/ui/loader';
import { Logo } from 'shared/ui/logo';

import cls from './style.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.page_loader, {}, [className])}>
    <div className={cls.loader_wrapper}>
      <Logo />
      <Loader />
    </div>
  </div>
);
