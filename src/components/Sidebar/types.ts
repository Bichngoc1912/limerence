import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
  isOpenSidebar: boolean;
}