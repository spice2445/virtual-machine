/* eslint-disable no-unused-vars */
import { ComponentProps, ElementType, ReactNode } from 'react';
import { classNames } from 'shared/lib/classnames';

import cls from './style.module.scss';

type ContainerOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  className?: string;
};

type ContainerProps<E extends ElementType> = ContainerOwnProps<E> &
  Omit<ComponentProps<E>, keyof ContainerOwnProps>;

const defaultElement = 'div';

export function Container<E extends ElementType = typeof defaultElement>({
  children,
  as,
  className,
  ...otherProps
}: ContainerProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName
      className={classNames(cls.container, {}, [className])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </TagName>
  );
}
