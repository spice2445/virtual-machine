import { classNames } from 'shared/lib/classnames';

import LogoIcon from './assets/LogoIcon.svg';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => (
  <LogoIcon
    data-testid='logo'
    className={classNames('', { }, [className])}
  />
);
