import { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
  isOpenSidebar: boolean;
}
