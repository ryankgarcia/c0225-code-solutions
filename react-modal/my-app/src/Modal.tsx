import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export function Modal({ children, isOpen }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen]);

  return <dialog ref={modal}>{children}</dialog>;
}
