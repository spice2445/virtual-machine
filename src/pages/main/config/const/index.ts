import { ToastOptions } from 'react-toastify';

export const toastConfig: ToastOptions<{}> = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
};

export const VMFunctions = {
  IADD: 1,
  ISUB: 2,
  IMUL: 3,
  IDIV: 4,
  IINC: 5,
  IDEC: 6,
  FDEL: 7,
  SWAP: 8
};

export const contractAddress = '0x83E6ea5E868e09d32039295b7712C99FCEc350E5';
