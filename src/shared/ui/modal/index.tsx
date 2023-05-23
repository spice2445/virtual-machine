/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from '@mui/material';
import {
  ReactNode, MouseEvent, useState, useRef, useEffect, useCallback
} from 'react';

import { classNames } from 'shared/lib/classnames';

import { Portal } from '../portal';

import ExitIcon from './assets/ExitIcon.svg';

import cls from './style.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
  persistent?: boolean;
  title: string;
  overflow?: boolean;
}

const ANIMATION_DELAY = 300;

// TODO: FIX ESLINT PROBLEMS WITH SEMANTIC
export const Modal = ({
  className, title, children, isOpen, overflow = false, onClose, persistent = false, lazy = true
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  const closeHandler = useCallback(() => {
    if (!onClose) return;
    setIsClosing(true);
    timer.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && !persistent) {
      closeHandler();
    }
  }, [closeHandler, persistent]);
  const contentHandler = (e: MouseEvent) => e.stopPropagation();

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(timer.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) setIsMounted(true);
  }, [isOpen]);

  if (lazy && !isMounted) return null;

  const isCloseHandler = persistent ? undefined : closeHandler;

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={classNames(cls.overlay, { [cls.blur]: persistent }, [])} onClick={isCloseHandler}>
          <div className={classNames(cls.content, {}, [])} onClick={contentHandler}>
            <div className={cls.header}>
              <Typography
                className={cls.title}
              >
                {title}
              </Typography>
              <ExitIcon className={cls.exit} onClick={closeHandler} />
            </div>
            <div className={classNames(cls.children, { [cls.overflow]: overflow }, [])}>{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
